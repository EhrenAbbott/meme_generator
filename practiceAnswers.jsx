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
export default App(){ 
    const [count, setCount] = React.useState(0)

    function addOne(){ 
        setCount(prevCount => prevCount + 1)
    }


    return( 
        <div> 
            <button onClick={addOne}>{count}</button>
        </div>
    )
}
//. Keep track of the constituent steps of this problem: 1) define the component 2) destructure and useState with starting value 
// 3) create function named after what it is doing that contains the destrcutures state function, which itself contain an anonymous callback 
//4) create your return block that implements the event listener (which is the named function)