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
// export default App() { 
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
// default export App() { 
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
// export default App(){ 
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
// export default App(){ 
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
// function App() {
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
export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        isFavorite: false
    }) 

    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite: !prevContact.isFavorite
            }
        })
    } 

    return (
        <div>
            <img src={`../images/${starIcon}`} onClick={toggleFavorite} />
        </div>
    )
}
//Notice that here you are using the spread operator with an object just as you would with an 
// array in order to avoid directly altering the state. 
// Also remember that bc the state is an object, you have to use dot notation with the key name 
// to access the correct one.