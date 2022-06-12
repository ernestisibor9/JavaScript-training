// // Event Listeners

// // Declare the variables
// const clickMe = document.getElementById('clickMe');


// // Define the  events
// clickMe.addEventListener('click', myWorld)


// // Create a  function
// function myWorld(){
//     alert('Welcome to the land of the living')
// }

// // Declare the variables
// const showEvent = document.querySelector('.good')


// // Define the event
// showEvent.addEventListener('click', myShow);



// // Create a function
// function myShow(e){
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.innerText);
//    // console.log('My world');
// }


// Search Form

// Declare variables
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');


// Declare the event
searchForm.addEventListener('submit', search_course)
searchInput.addEventListener('blur', myKey)

// Create a function
function search_course(event){
    event.preventDefault()

    // console.log(searchInput.value);
    //console.log('Yes it is working');
}

function myKey(e){
    e.preventDefault()

    if(searchInput.value.length === 2){
        alert('You are handsome')
    }
    console.log(searchInput.value);
}

// Declare the variable
const my = document.getElementsByTagName('a')
for(let num of my){
    console.log(num);

    num.addEventListener('click', myLove)

    function myLove(e){
        e.preventDefault()
        //console.log(e.target);
        if(e.target.classList.contains('bb')){
            e.target.remove()
            console.log('YES');
        }
        else{
            console.log('NO');
        }
        //alert('Good')
    }
    

}

// my.addEventListener('click', myLove)

// function myLove(){
//     alert('Good')
// }
