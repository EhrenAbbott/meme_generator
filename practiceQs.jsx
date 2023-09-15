import { render } from "react-dom"

// 1.  Destrucuture the results of the use State hook and pass in the important part to the component so it displayes the word "yes"


//2. Create an event listener that changes the state from "yes" to "no" when clicked


//3. Create an event listener using state that increase a counter by one when a button is clicked


//4. While 2 and 3 work, they are not best practice when changing the value of state; using an anonymous  callback function is best practice to change the state
//value. Do number 3 but using best practices.  

// 5. Generate a random number between 1 and the length of a specific array of objects 

// 6. Use a ternary operator to set a variable to something based on the value of another variable 


// 7. Use a ternary operator to conditionally dislay "yes" or "no" in a component's markup 

// 8. create a boolean state  that changes from true to false when a markup element is clicked; 
// The text being dispalyed will also change from "yes" to "no" when the state changed. 


// 9. Set the state of a component to an array wtih mutliple items, such as "item 1" "item 2" etc.
// Then create a function thar adds another item (withs its corresponidng number) to this array. 
// Lastly,  as each item gets added to the state array, have it get displayed in the html component. 

// 10. Click icon to have state object isFavorite change from true to false and bck again if clicked once more. 
// When isFavorite state changes, the icon will change from a fill-in star to a greyed-out star. 
// The image files will be: "star-filled.png" and "star-empty.png" 


//11.  In a component called Star, pass in a prop to determine if an icon is filled-in star 
// or a greyed-out star. Render this component as a child of App and pass in the props that are based on 
// a state object property. 

//----------------Star.jsx------------------- 

// ----------------App.jsx------------------- 


// 12. Do #11 but give the child component the ability to change the 
//state in App by clicking on the image. 
//
//----------------Star.jsx------------------- 

// ----------------App.jsx------------------- 

// 13. Set the CSS proeprties of  a element in a React component

// 14. Do the above but use a ternary operator to conditionally set the background color 
// Assume that there the CSS property is dependent upon a prop called darkMode. 

// 15. For every item in the state, have a parent component display that many child components.
// Set the state  to the contents of another file called objFile.js , which is an array of objects
// Next, if the array objects have their 'on' property set to true, have them render in a different color.

//----------------Child.jsx------------------- 
// import React from 'react'

// export default function Child(props){ 


//     return( 

//     )
// }


// ----------------Parent.jsx------------------- 
// import React from 'react'
// import Child from './Child.jsx'
// import info from './Info.jsx'

// export default function Parent(){ 


    
//     return( 
        
//     )
// }


//#####################################################################################################################


// 16. 
// Do the first 2 lines of #15. 
// Create a function in the parent component and give its children access to this function. 
// The function will console log its unique id (from state).
// Allow the child's function to take its own unique argument; print the argument 

//#####################################################################################################################


// !!!Box challenge part 5 - don't understand: https://scrimba.com/learn/learnreact/boxes-challenge-part-5-cobdb4d3e907fa304af4b9958 !!!


//#####################################################################################################################


// 17. Create a component and give it a state of a boolean value. 
// Create a function that chages this value from true to false (or vice versa). 
// Display a button that chages th boolean value when clicked.
// Have the component conditionally display text (received from parent component) only if the state is true


//#####################################################################################################################


// 18. Create a componnet that displays text only if there are items in the state array. 


//#####################################################################################################################


// 19. Create a react component that allows you to type in text. 
//     Have the state update with each keystroke and display the state. 


//#####################################################################################################################

// 20. Do 19 but create a form with two input fields.
//     Give the one function the ability to update the part of state that represents each input field text. 
//     (This means the state has to be an object)


//#####################################################################################################################

// 21.  Create a react component that had a form that allows you to type in text and another element that is a checkbox


//#####################################################################################################################

// 22. Create a react component with a text input form and a radio button with three options. 

//#####################################################################################################################

// 23. Create a react component with a text input form and a select box and two options. 


//#####################################################################################################################

// 24. Create a button so submit  a form and a handleSubmit function 

//##################################################################################################################### 

// 25. Have a component retieve data from API, format it in a readable style and display it on screen. 

//#####################################################################################################################

// 26. 

//#####################################################################################################################

// 27. 

//#####################################################################################################################

// 28. 

//#####################################################################################################################

// 29. 

//#####################################################################################################################

// 30. 

//#####################################################################################################################