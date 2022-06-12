// Declaration of variables
const errorMessage = document.getElementById('errorMessage')
const userName = document.getElementById('userName')
const password = document.getElementById('password')
const btn = document.getElementById('btn')
const myForm = document.getElementById('myForm')


// Add event listener
myForm.addEventListener('submit', formValidate)

// Create a function tio validate the form
function formValidate(e){
    e.preventDefault();
    // Create an array of error
    let message = []
    // Get users data
    if(userName.value === ""){
        message.push ("Please enter username")
    }

    if(password.value === ""){
        message.push ("Please enter password")
    }

    if(password.value.length < 6){
        message.push ("Password must be at least 6 character")
    }

    // Check if the error exist
    if(message.length > 0){
        errorMessage.innerText = message.join(',');
    }
}
