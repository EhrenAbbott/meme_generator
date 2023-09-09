import React from 'react'
import ReactDOM from 'react-dom'


export default function(){ 
    return( 
        <div className='meme-div'>  
                <form className='form-div'> 
                    <div className='text-div'>
                        <input type="text" placeholder='top text'/> 
                        <input type="text" placeholder='bottom text'/>
                    </div>  
                    <div className='button-div'>
                        <button className='submit-btn' type="submit">Submit</button>
                    </div>
                </form> 
                <div className='img-div'> 
                    <img className='meme-img' src="#"/>
                </div>
        </div>
    )
}