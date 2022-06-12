// Change Background color application

// // Create an array of colors
// let colors = ['red', 'blue', 'yellow', 'green', 'indigo', 'black', 'orange', 'purple', 'pink'];

// // Declaration of variable
// const btn = document.getElementById('btn')
// const myBody = document.body


// // Add an Event Listener
// btn.addEventListener('click', display)


// // Create a function
// function display(){
    
//     // Generate random numbers
//     const randomGenerator = Math.floor (Math.random() * colors.length)
//     // console.log(randomGenerator);
//     //Add a backgroundColor to the body of your document
//     myBody.style.backgroundColor =  colors[randomGenerator]
// }


// Declaration of variable
const displayBtn = document.getElementById('displayBtn')

// Add an Event Listener
displayBtn.addEventListener('click', displayTimeout)


// Create a function
function displayTimeout(){
    // SetTimeout
    setTimeout(function(){
        // console.log("Hello World");
        alert('Welcome to Nigetria 99')
    }, 10000);

    setTimeout();
}

