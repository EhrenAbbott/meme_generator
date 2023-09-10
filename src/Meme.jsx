import React from 'react'
import ReactDOM from 'react-dom'
import memeData from './memeData'


export default function(){ 
    
    function getMemeImage(){ 
        const memeArray = memeData.data.memes
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url
        console.log(url)
    
    
    }
    
    return( 
        <div className='meme-div'>  
                <div className='form-div'> 
                    <div className='text-div'>
                        <input type="text" placeholder='top text'/> 
                        <input type="text" placeholder='bottom text'/>
                    </div>  
                    <div className='button-div'>
                        <button onClick={getMemeImage} className='submit-btn' type="submit">Submit</button>
                    </div>
                </div> 
                <div className='img-div'> 
                    <img className='meme-img' src="#"/>
                </div>
        </div>
    )
}