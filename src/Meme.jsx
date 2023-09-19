import React from 'react'
import ReactDOM from 'react-dom'


export default function(){ 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg",
        pushLeft: false,
        pushRight: false,
        diptych: false, 
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(() => { 
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function textAlignment() { 
        const pushLeftArr = [ 
            "https://i.imgflip.com/1nck6k.jpg",
            "https://i.imgflip.com/38el31.jpg",
        ] 
        const diptychArr = [ 
           "https://i.imgflip.com/345v97.jpg",
           "https://i.imgflip.com/3lmzyx.jpg",
           "https://i.imgflip.com/9ehk.jpg",
           "https://i.imgflip.com/43a45p.png",
           "https://i.imgflip.com/1tkjq9.jpg",
           "https://i.imgflip.com/3umnr3.jpg",
           "https://i.imgflip.com/1ur9b0.jpg", 
           "https://i.imgflip.com/7ry2sf.png",
        ] 
        const pushRightArr = [ 
            "https://i.imgflip.com/24zoa8.jpg",
            "https://i.imgflip.com/1iruch.jpg",
        ]

        if (pushLeftArr.includes(meme.randomImage)) { 
            console.log("includes")
            setMeme(prevMeme => {  
                return { 
                    ...prevMeme, 
                    pushLeft: true
                } 
            }) 
            console.log(meme.pushLeft)

        } else if (diptychArr.includes(meme.randomImage)){ 
            console.log("includes")
            setMeme(prevMeme => { 
                return { 
                    ...prevMeme, 
                    diptych: true
                }
            })
            console.log(meme.diptych)

        } else if (pushRightArr.includes(meme.randomImage)){ 
            console.log("includes")
            setMeme(prevMeme => { 
                return { 
                    ...prevMeme, 
                    pushRight: true
                }
            })
            console.log(meme.diptych)
    }  
    }

    function clearText() { 
        setMeme(prevMeme => { 
            return { 
                ...prevMeme, 
                topText: "", 
                bottomText: "",
            }
        })
    }

    function getMemeImage() {
        textAlignment()
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        // const url = "https://i.imgflip.com/1nck6k.jpg"
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }))
        clearText()
    } 

    function handleChange(event){ 
        const { name, value } = event.target

        setMeme(prevState => { 
            return { 
                ...prevState, 
                [name]: value,
            }
        })
    }

  
    
    return( 
        <main>  
                <div className='form'> 
                    <input  
                        className='form--input'
                        type="text" 
                        placeholder='top text'
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    /> 
                    <input
                        className='form--input' 
                        type="text" 
                        placeholder='bottom text'
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button 
                        onClick={getMemeImage}
                        className='form--button' 
                        type="submit">
                            Get new image
                    </button>
                </div> 
                <div className='meme'> 
                    <img className="meme--image" src={meme.randomImage}/>
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
        </main>
    )
}