// Declaration of variable
const myValue = document.getElementById('myValue')
const btnMe = document.querySelectorAll('.btn')

// Initialize the counter
let counter = 0;

// Iterate or loop through
btnMe.forEach((btnLoop)=>{

    // Add an Event Listener
    btnLoop.addEventListener('click', changeMe)

    // Create a function
    function  changeMe(e){
        const myStyles = e.currentTarget.classList
        if(myStyles.contains('increase')){

            counter ++
            myValue.textContent = counter
        }

        else if(myStyles.contains('decrease')){

            counter --
            myValue.textContent = counter
        }
       
        else{
            counter = 0
        }
    }






})