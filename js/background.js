// Class activity = Background changing app
// Create an array of colors
const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'pink', 'orange', 'grey', 'black', 'indigo', 'brown'];

// Declare the variables
const myBtn = document.getElementById('btn');
const myBody = document.body;


// Add event listeners
myBtn.addEventListener('click', myColorFunc);


// Create a function
function myColorFunc(){

    // Get random numbers
    const randomNumber = Math.floor(Math.random() * colors.length)
    
    // Assign the generated number to the colors - colors[0]
    randomNumberGenerated = colors[randomNumber];

    // Append randomNumberGenerated to the myBody
    myBody.style.backgroundColor = randomNumberGenerated;

}