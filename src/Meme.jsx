import React from 'react'
import ReactDOM from 'react-dom'
import memeData from './memeData'


export default function(){ 
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    const [allMemeImages, setAllMemeImages] = React.useState(memeData)
    
    
    function getMemeImage() {
        const memeArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
    
    return( 
        <div className='meme-div'>  
                <div className='form-div'> 
                    <div className='text-div'>
                        <input type="text" placeholder='top text'/> 
                        <input type="text" placeholder='bottom text'/>
                    </div>  
                    <div className='button-div'>
                        <button onClick={getMemeImage} className='submit-btn' type="submit">Get new image</button>
                    </div>
                </div> 
                <div className='img-div'> 
                    <img className="meme--image" src={meme.randomImage}/>
                </div>
        </div>
    )
}