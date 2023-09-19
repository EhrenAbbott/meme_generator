import React from 'react'
import ReactDOM from 'react-dom'


export default function(){ 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(() => { 
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        console.log(url)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
            topText: "", 
            bottomText: "",
        }))
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