// Declare variables
const myForm = document.getElementById('myForm')
const comment = document.getElementById('comment');
const btn2 = document.getElementById('btn2')
const post = document.getElementById('post')


// Add an event listener
btn2.addEventListener('click', showComment)


// Create a function
function showComment(e){
    e.preventDefault()
   
    // Get users coments
    const myComment = comment.value
    
    // Create a li tag
    const li = document.createElement('li')
    li.textContent = myComment
    
    // Append child
    post.appendChild(li)
}