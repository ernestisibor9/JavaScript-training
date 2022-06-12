// Class  activity - Form validation

// Declaration of variable
const myForm = document.getElementById('myForm');
const userName = document.getElementById('userName');
const password = document.getElementById('password');
const errorMsg = document.getElementById('error');


// Add an event listener
myForm.addEventListener('submit', formValidation)




// Create a function
function formValidation(e){
    let messages = [];
    e.preventDefault()

    // Check if the field is empty
    if(userName.value === ''){
        messages.push('Username is required')
    }

    // Check if the field is empty
    if(password.value === ''){
        messages.push('Pssword is required')
    }

    // Check the minimum value for password
    if(password.value.length < 6){
        messages.push('Password must be at least 6 characters long')
    }

    // Check if the error exist
    if(messages.length > 0){
        errorMsg.innerText = messages.join(',');
    }
}