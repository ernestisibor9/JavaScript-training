// Hide and Show events
const myImage = document.getElementById('myImage');
const myBtn1 = document.getElementById('myBtn1');
const myBtn2 = document.getElementById('myBtn2');
const myImage2 = document.getElementById('myImage2');

// Hide image2 
myImage2.style.display = 'none';


// Add event listener
myBtn1.addEventListener('click', myFunctBtn1);
myBtn2.addEventListener('click', myFunctBtn2);

// Create a function
function myFunctBtn1(){
    myImage.style.display = 'block';
    myImage2.style.display = 'none';
}

// Create a function
function myFunctBtn2(){
    myImage2.style.display = 'block';
    myImage.style.display = 'none';
}