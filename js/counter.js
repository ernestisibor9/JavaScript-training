// Class activity = Counter App

// Set initial count = 0
let count = 0;

// Declare the variables
const myValue = document.querySelector('#value');
const myBtn = document.querySelectorAll('.btn')

// Loop through the buttons
myBtn.forEach((btn)=>{
    
    // Add Event listener
    btn.addEventListener('click', myBtnFunc);

    function myBtnFunc(e){
        // console.log(e.currentTarget.classList);
        const myStyles = e.currentTarget.classList;
        if(myStyles.contains('increase')){
            count ++;
        }
        
        else if(myStyles.contains('decrease')){
            count --;
        }

        else{
            count = 0;
        }
        myValue.textContent = count;
        if( count > 0){
            myValue.style.color = 'green'
        }
        else if (count < 0){
            myValue.style.color = 'red'
        }
        else{
            myValue.style.color = 'indigo'
        }
    }


})