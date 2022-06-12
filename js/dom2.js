// Event Listeners

// Declaring the variables
const myForm = document.getElementById('myForm');
const userName = document.getElementById('nameVal')


// Add event listener
myForm.addEventListener('submit', formVal)



// Create function
function formVal(e){
    // Event to prevent form submission default
    e.preventDefault();
    console.log(userName.value); 

    console.log('It is working');
}

