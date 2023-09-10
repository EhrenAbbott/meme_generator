import React from 'react'
import ReactDOM from 'react-dom'
import memeData from './memeData'


export default function(){ 
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage(){ 
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        setMemeImage(memeArray[randomNumber].url)
    
    
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
                    <img src={memeImage}/>
                </div>
        </div>
    )
}