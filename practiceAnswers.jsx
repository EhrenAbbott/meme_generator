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


//#####################################################################################################################


// 19. 
// export default function Comp() { 

//     const [text, setText] = React.useState("")

//     function handleChange(event) { 
//         setText(event.target.value)
//     }

//     return( 
//         <form> 
//             <input  
//                 type="text"
//                 onChange={handleChange}
//             />
//         </form>
//     )
// }

//NOTE: most/all form elements have an event listener called onChange that checks anytime
// something is modified at all (so not just as the form is submitted, but as the user is typing)
//ALSO: when you give the onChage function a param (calling it "event" is the convention), console.loggin
// this event will show you an object that contains a lot of meta info about the function. The propert in this 
// object that you will most likely care about is called "target." Remember this object is 
// automatically created so the 'target' property is what the system calls it. 
// Console.logging this event.target will show you the html element: <input type="type">    (and 
// whatever properties this element has) 
// Finally, to display what is actually being typed in the input, you would have to use event.target.value to navigate to the 
// correct part of the generated object. 


//#####################################################################################################################


// 20. Do 19 but create a form with two input fields.
//     Give the one function the ability to update the part of state that represents each input field text. 
//     (This means the state has to be an object)
//     Give it an input that is a text area

// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {firstName: "", lastName: "", comments: ""}
//     )
    
    
//     function handleChange(event) {
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [event.target.name]: event.target.value
//             }
//         })
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}


//             />
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 name="lastName"
//                 value={formData.lastName}
//             /> 
//             <textarea 
//                 value={formData.comments}
//                 onChange={handleChange}
//                 name="comments"
//             />
//         </form>
//     )
// }

// NOTE: the name property gives that input its unique label, just so we have some way fo referring to it 
// and distinguishing it from other input fields.  
// ALSO: After the spread operator in the return block, the usage of the brackets is called "computed property"
// introduced in ES6, which allows you turn something saved in a variable as the property name for a object.
// So the function is saying: return everything in the object but where there is a property that matches the input name, 
// update this to be the new input value (which is what is being typed at the time)
// BTW: the value of the inputs need to be set equal to  the state that represents that input value. So just make sure those var 
// names match. 
// Theory: the value property does not actually change anything with the display; it has a more behind-the-scenes effect that 
// has to do with a concept called 'controlled componennts'; essentially, before we used "value", when a user types into an
// input box, that input box is maintaining its own state, which means there are two pieces of state: this one, held by the input 
// box in regular html, and the other held in the React code which is updating on every keystroke. 
// So "value" makes it so the value of the input box isn't being controlled but the input itself but rather by React, 
// and this avoids a potential soruces of conflict, as no the state is telling the input box what to be instead of the 
// other way around. 
// FYI: in React, textarea is self closing and bhaves just like <input /> in terms of the properties you have it give it (except 
// you don't have to give it a type)



//#####################################################################################################################

// 21. 

// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "", 
//             isFriendly: true
//         }
//     )
    
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
//             <input 
//                 type="checkbox" 
//                 id="isFriendly" 
//                 checked={formData.isFriendly}
//                 onChange={handleChange}
//                 name="isFriendly"
//             />
//             <label htmlFor="isFriendly">Are you friendly?</label>
//         </form>
//     )
// }

// Note: checkboxes are an input with type="checkbox" and they hold a boolean value. This gets paired with a label element, 
// which can be nested or can be its own seperate line. The link the two, the label's htmlFor property has to be the input's id; not that 
// this property name is a bit different than in plain html. Be sure to make the state for the  checkbox a boolean and not a string. 
// It  will also get a checked={} property INSTEAD OF a value property, and this will be true or false, and the handleChange function has to take this
// into account. 
// ALSO: Notice how the even.target properties are being desctructured here before returning the spread 
//operator. This is for efficiency bc each input will have a key called 'name', BUT the value of that key will come from 
// different properties depending on if it is a checkbox or if it is another type of input.

//#####################################################################################################################

// 22.  
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "", 
//             employment: ""
//         }
//     )
    
//     function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
            
//             <fieldset>
//                 <legend>Current employment status</legend>
                
//                 <input 
//                     type="radio"
//                     id="unemployed"
//                     name="employment"
//                     value="unemployed"
//                     checked={formData.employment === "unemployed"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="unemployed">Unemployed</label>
//                 <br />
                
//                 <input 
//                     type="radio"
//                     id="part-time"
//                     name="employment"
//                     value="part-time"
//                     checked={formData.employment === "part-time"}
//                     onChange={handleChange}
//                 />
//                 <label htmlFor="part-time">Part-time</label>
//             </fieldset>
//         </form>
//     )
// } 
//NOTE: the name for all of the radio options will be the SAME; this is what makes it so you can only choose one of them
// IN terms of how ti handles state, notice that its state value is actually a string that is also NOT a text input; 
// this is unlike the checkbox, which has a true or false value, and the text input value, which is the string that the user creates 
// Because it is unique in this way, it has both a value, which is it's unique text that applies to that particular option 
// AND it has a checked property that we turn into a boolean by saying mariking it true if it is equal to the value property (which is in itself 
// the same as the name property for that option)

//#####################################################################################################################

// 23. 
// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "", 
//             favColor: ""
//         }
//     )
    
//     function handleChange(event) {
//         console.log(event)
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }
    
//     return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="First Name"
//                 onChange={handleChange}
//                 name="firstName"
//                 value={formData.firstName}
//             />
            
//             <label htmlFor="favColor">What is your favorite color?</label>
//             <br />
//             <select 
//                 id="favColor"
//                 value={formData.favColor}
//                 onChange={handleChange}
//                 name="favColor"
//             >
//                 <option value="">-- Choose --</option>
//                 <option value="red">Red</option>
//                 <option value="orange">Orange</option>
//                 <option value="yellow">Yellow</option>
//                 <option value="green">Green</option>
//                 <option value="blue">Blue</option>
//                 <option value="indigo">Indigo</option>
//                 <option value="violet">Violet</option>
//             </select>
//         </form>
//     )
// }

//NOTE: The select element has multiple properties but the options only have a value

//#####################################################################################################################

// 24. 

// import React from "react"

// export default function Form() {
//     const [formData, setFormData] = React.useState(
//         {
//             firstName: "", 
//         }
//     )
    
//     function handleSubmit(event) {
//         event.preventDefault()
//         // submitToApi(formData)
//         console.log(formData)
//     }
    
//     return (
//         <form onSubmit={handleSubmit}>
//             <button>Submit</button>
//         </form>
//     )
// }
 
//NOTE: With this submit button/func you woudl of course need to  input fields and appropriate
// accompany bits of state and the handleChange func to update state.
//ALSO: the event.preventDefault() part just makes it so that when the form is submitted the inputs and fields don't
// get added to the URL, which is what would normally happen without preventDefault. 
//AND: notice the event listener for the button is not onChange or onClick, but onSubmit

//#####################################################################################################################

// 25. 

// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
    
//     fetch("https://swapi.dev/api/people/1")
//         .then(res => res.json())
//         .then(data => setStarWarsData(data))
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

//NOTE: If you console.log the API object, it will run an infinite loop. This is because anytime the component renders, its going to call fetch, 
// and everytime it calls fetch it sets the starWarsData, which updates the state, causing react to rerender the component and on and on
// The fetch request is considered a side effect, and that will need to be handled in a certain way (below)

//#####################################################################################################################

// 26.  
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [])
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

//NOTE: useEffect takes one required parameter, with will be a function, and a second optional parameter (but almost always gets used). 
// It essentially allows this outside effect to remain in sync with React components. 
// The code in the useEffect callback function will only run after the user interface (from the return block) are created 
// and placed on the DOM. 
// If the second parameter is left as an empty array, the first param (the function) will only run once when the component first loads.

//##################################################################################################################### 

// 27.  
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch("https://swapi.dev/api/people/1")
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

//#####################################################################################################################

// 28.  
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
//     const [count, setCount] = React.useState(1)
    
//     React.useEffect(function() {
//         console.log("Effect ran")
//         fetch(`https://swapi.dev/api/people/${count}`)
//             .then(res => res.json())
//             .then(data => setStarWarsData(data))
//     }, [count])
    
//     return (
//         <div>
//             <h2>The count is {count}</h2>
//             <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }


//#####################################################################################################################

// 29.  

//-----------------------------------App.jsx---------------------------------
// import React from "react"
// import WindowTracker from "./WindowTracker"

// export default function App() {
    
//     const [show, setShow] = React.useState(true)
    
//     function toggle() {
//         setShow(prevShow => !prevShow)
//     }
    
//     return (
//         <div className="container">
//             <button onClick={toggle}>
//                 Toggle WindowTracker
//             </button>
//             {show && <WindowTracker />}
//         </div>
//     )
// }

//-----------------------------------WindowTracker.jsx---------------------------------
// import React from "react"

// export default function WindowTracker() {
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         window.addEventListener("resize", function() {
//             setWindowWidth(window.innerWidth)
//         })
//     }, [])
    
//     return (
//         <h1>Window width: {windowWidth}</h1>
//     )
// } 

//NOTE: at it is, this will work but will create an error message when the toggle si off and you change the window size. 
// This is because when it is toggled off, this component gets 'unmounted'; 
// This means it is completely removed from the DOM, but the browser itself is still listening for the resize event and trying to set the 
// window width of an unmounted component. This issue is called a "memory leak". 
// The next problem wll address how to fix this memory leak.
//#####################################################################################################################

// 30.

//-----------------------------------App.jsx---------------------------------
// SEE; #29

//-----------------------------------WindowTracker.jsx---------------------------------

// import React from "react"

// export default function WindowTracker() {
    
//     const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
//     React.useEffect(() => {
//         function watchWidth() {
//             setWindowWidth(window.innerWidth)
//         }
        
//         window.addEventListener("resize", watchWidth)
        
//         return function() {
//             window.removeEventListener("resize", watchWidth)
//         }
//     }, [])
    
//     return (
//         <h1>{windowWidth}</h1>
//     )
// }

//This utilizes a useEffect "cleanup function" that takes care of any unwanted side effects, in this case, removing the event listener
// This is not so different than #29; here the setWindowWidth function is named instead of being anonymous, and this named function
// is what we run in the event listener (instead of being defined in line)
// Then, the we make our cleanup function; this needs to be created after a return; this way, React knows to run it when the 
// component's lifecycle comes to an end and it is toggled off. 
//The cleanup function simply uses .removeEventListener to undo what was done initially. 
// NOTE: not every useEffect will need a cleanup function, but that is the case here. 
//#####################################################################################################################

// 31. 
// import React from "react"

// export default function App() {
//     const [starWarsData, setStarWarsData] = React.useState({})
    
//     React.useEffect(() => { 
//         async function getMemes(){
//             const res = await fetch("https://swapi.dev/api/people/1")
//             const data = await res.json()
//             setStarWarsData(data)
//         }

//         getMemes()
//     }, [])
    
//     return (
//         <div>
//             <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
//         </div>
//     )
// }

// useEffect takes a function as its parameter. If that function
// returns something, it needs to be a cleanup function. Otherwise,
// it should return nothing. If we make it an async function, it
// automatically retuns a promise instead of a function or nothing.
// Keep in minf that async alters how a function works;  anything returned from an async function 
// will automatically and always be a promise. 


//#####################################################################################################################
