// Declaration of variable
const myDate = document.getElementById('myDate')

// Set interval
let mySet =  setInterval(myTimer, 1000);


// Create a function

function myTimer(){
    // To get the current date
    const dateWorld = new Date();
    // Put dateWorld into <p>
    myDate.innerHTML = dateWorld.toLocaleTimeString();
}

