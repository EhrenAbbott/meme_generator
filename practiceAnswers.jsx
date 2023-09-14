import { useState } from "react";

// 1. 
// export default function App(){ 
//     const [result, setResult] = React.useState("yes")

//     return (  
//         <div>
//             <h1>{result}</h1>
//         </div>
//     )
// } 
// IMP: 'set' + 1stVAR is the convention used for the function variable when destructuring


// 2.
// export default function App() { 
//     const [important, setImportant] = React.useState("yes")

//     function handleClick(){ 
//         setImportant("no")
//     }

//     return ( 
//         <div> 
//             <h3 onClick={handleClick}>click here</h3>
//         </div>
//     )
// }

// 3. 
// default export function App() { 
//     [count, setCount] = React.useState(0)

//     function addOne(){ 
//         setCount(count + 1)
//     }
    
//     return( 
//         <div> 
//             <button onClick={addOne}>{count}</button>
//         </div>
//     )
// }
//NOTE: for this Q and the previous one, not that is is critical that we are 
//not changing the state itself; we are using setCount(count + 1) NOT setCount(count = count + 1)

// 4. 
// export default function App(){ 
//     const [count, setCount] = React.useState(0)

//     function addOne(){ 
//         setCount(prevCount => prevCount + 1)
//     }


//     return( 
//         <div> 
//             <button onClick={addOne}>{count}</button>
//         </div>
//     )
// }
//. Keep track of the constituent steps of this problem: A) define the component B) destructure and useState with starting value 
//          C) create function named after what it is doing that contains the destrcutures state function, which itself contain an anonymous callback 
//          D) create your return block that implements the event listener (which is the named function) 


// 5. 
//
// Math.floor(Math.random() * obj.key1.key2.length) 
//
// Keep in mind that the exact dot notation you use to navigate into the precise array will depend 
// on how everything is nested within the overarching object and its constituent keys.

// 6. 
//
// const isHome = false
// let myVar = isHome === true ? "yes" : "no" 
//
//Another way fo reading this is: if isHome is true, myVar is "yes", otherwise, 
// (ifHome is false), myVar is "no" 
// 
//The above can be simplified even further with: 
// 
// let myVar = isHome ? "yes" : "no"

// 7. 
// export default function App(){ 
//     const isHome = true; 

//     return( 
//         <div> 
//             <h1>{isHome ? "yes" : "no"}</h1>
//         </div>
//     )
// }


// 8. 
// export default function App() {
//     const [isGoingOut, setIsGoingOut] = React.useState(true)
    
//     function changeMind() {
//         setIsGoingOut(prevState => !prevState)
//     }
    
//     return (
//         <div onClick={changeMind}>
//             <h1>{isGoingOut ? "Yes" : "No"}</h1>
//         </div>
//     )
// } 

// 9. 
// export default function App() {
//     const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])
    
//     function addItem() {

//         setThingsArray(prevThingsArray => {
//             return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
//         })
//     }
    
//     const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
//     return (
//         <div>
//             <button onClick={addItem}>Add Item</button>
//             <h1>{thingsElements}</h1>
//         </div>
//     )
// }
// 
//NOTE: we don't use .push() here bc that directly modifies the state itself, and .push 
// is a "destructive action", meaning it modifies the original array. Instead we need to use the spread operator 
// in order to accomlish what we want without directly modifying the array.  
// Also note that this is just one way to do this; you could also use a for loop to loop over the previous array 
// and adds items to a new array and adds the new value. 


//10. 
// export default function App() {
//     const [contact, setContact] = React.useState({
//         firstName: "John",
//         isFavorite: false
//     }) 

//     let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

//     function toggleFavorite() {
//         setContact(prevContact => {
//             return {
//                 ...prevContact,
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//     } 

//     return (
//         <div>
//             <img src={`../images/${starIcon}`} onClick={toggleFavorite} />
//         </div>
//     )
// }
//Notice that here you are using the spread operator with an object just as you would with an 
// array in order to avoid directly altering the state. 
// Also remember that bc the state is an object, you have to use dot notation with the key name 
// to access the correct one.

// 11. 
//----------------Star.jsx------------------- 
// import React from 'react' 

// export default function Star(props){  

//     const favIcon = props.isFilled  ? "file1.png" : "file2.png"

//     return ( 
//         <img src={`..images/${favIcon}`}/>
//     )
// }  
//
// ----------------App.jsx------------------- 
// import React from 'react'
// import Star from './Star.jsx'

// export default function App(){  

//     const [contact, setContact] = React.useState({ 
//         isFavorite: true,
//     })

//     return (  
//         <div>
//             <Star isFilled={contact.isFavorite}/>
//         </div>
//     )
// } 


//12. 
//----------------Star.jsx------------------- 
// import React from 'react' 

// export default function Star(props){  

//     const favIcon = props.isFilled  ? "file1.png" : "file2.png"

//     return ( 
//         <img  
//              src={`..images/${favIcon}`}
//              onClick={props.handleClick}
//          />
//     )
// }  
//
// ----------------App.jsx------------------- 
// import React from 'react'
// import Star from './Star.jsx'

// export default function App(){  

//     const [contact, setContact] = React.useState({ 
//         isFavorite: true,
//     }) 

//     function toggleFavorite(){ 
//         setContact(prevContact => { 
//             return { 
//                 ...prevContact, 
//                 isFavorite: !prevContact.isFavorite
//             }
//         })
//     }

//     return (  
//         <div>
//             <Star  
//                  isFilled={contact.isFavorite}
//                  handleClick={toggleFavorite}
//              />
//         </div>
//     )
// } 


// NOTE: you CANNOT pass in onClick={} to the child component in App. 
// This is because the properties that get based in to child component are all custom properties, so 
// onClick would have no inherent meaning here. This is a problem bc we need to interact with the 
// child component and have it change the state, which is deifned in the parent component. 
// So to get around this, in App we have to to pass in a custom prop, which is a function previosuly defined in App.
// Then in Star, we have to create the onClick event listener that uses the function. 
// ALSO NOTE: in App we call the prop handleClick, as opposed to onClick, bc this is a way of letting 
// the reader know that this is a custom prop we've made and not the built in onClick event listener. 


// 13. 
// export default function App(){ 
    
//     const styles = { 
//         backgroundColor: "black", 

//     }

//     return ( 
//         <div style={styles}></div>
//     )
// } 

//NOTE: the CSS has to be in CAMEL CASE and the value has to be in quotes!
// Also, you can set the styles directly in the returned div, but it just looked clearer 
// to define them in their own variable when you are passing in multiple properties. 


// 14. 

// export default function App(){ 
    
//     const styles = { 
//         backgroundColor: props.darkMode ? "black" : "white"

//     }

//     return ( 
//         <div style={styles}></div>
//     )
// }  

//#####################################################################################################################


// 15. 
//----------------Child.jsx------------------- 
// import React from 'react'

// export default function Child(){ 

//     const styles = { 
//         backgroundColor: props.on ? "black" : "white"
//     }
    
//     return( 
//         <div style={styles}></div>
//     )
// }

// ----------------Parent.jsx------------------- 
// import React from 'react'
// import Child from './Child.jsx' 
// import objFile from './objFile.jsx'

// export default function Parent(){ 
//     const [state, setState] = React.useState(objFile)

//     const mappedObj = state.map(item => <Child on={item.on} id={item.id}/>)

//     return( 
//         {mappedObj}
//     )
// } 


//#####################################################################################################################


// 16. 
// ----------------Box.jsx------------------- 
// import React from "react"

// export default function Box(props) {
    
//     return (
//         <div 
//             onClick={()=>props.toggle(props.id)}
//         >
//         </div>
//     )
// }


// ----------------App.jsx------------------- 
// import React from "react"
// import boxes from "./boxes"
// import Box from "./Box"

// export default function App() {
//     const [squares, setSquares] = React.useState(boxes)
    
//     function toggle(id) {
//         console.log(id)
//     }
    
//     const squareElements = squares.map(square => (
//         <Box 
//             id={square.id}
//             toggle={toggle}
//         />
//     ))
    
//     return (
//         <main>
//             {squareElements}
//         </main>
//     )
// }

//NOTE: when you create a function in the parent and pass it to the child and this 
// function gets used in the child, there is no way in React for it to give it an argument
// by using onClick={props.FUNC}. So bc of this, you have to give the child its own function 
// that runs props.FUNC. 
// So in the parent component when you say FUNC(arg) and pass it to the child, this sort of gives it the 
// theoretical ability to take an argument with no concrete way to do so. In the child component, 
// when you create an anon function that runs the props.FUNC, you are giving it a concrete way to take 
// an argument. 
//  This argument can be another prop, and if it is a unique identifier like 'id', 
// this can be the argument that can be used to distnguish that particular child from the other identical children

//#####################################################################################################################


// 17. 
// import React from 'react'

// export default function Comp(props){ 

//     const [isShown, setIsShown] = React.useState(false)

//     function toggle(){ 
//         setIsShown(prevShown => !prevShown)
//     }

//     return(  
//         <div>
//             {isShown && <p>{props.text}</p>} 
//             <button onClick={toggle}>Show text</button>
//         </div>
//     )
// }

//#####################################################################################################################

// 18. 

// import React from "react"

// export default function App() {
//     const [messages, setMessages] = React.useState(["a", "b"])

//     return (
//         <div>
//             {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
//         </div>
//     )
// } 

//NOTE: you can actually eliminate the "> 0" bc when the length is zero is automatically considered 
// a falsey value. So just messages.length in the brackets with the && woudl be read as: if the lenght is not zero 
// display the following
