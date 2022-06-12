// DECLARATION OF VARIABLES
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')
const img4 = document.getElementById('img4')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')

// Hide img1 - img4 photos
img1.style.display = 'none'
img2.style.display = 'none'
img3.style.display = 'none'
img4.style.display = 'none'

// Add Event Listener
btn1.addEventListener('click', showPhoto1)
btn2.addEventListener('click', showPhoto2)
btn3.addEventListener('click', showPhoto3)
btn4.addEventListener('click', showPhoto4)



// Create a function for showPhoto1
function showPhoto1(){
    img1.style.display = 'block'
    img2.style.display = 'none'
    img3.style.display = 'none'
    img4.style.display = 'none'
}

// Create a function for showPhoto2
function showPhoto2(){
    img2.style.display = 'block'
    img1.style.display = 'none'
    img3.style.display = 'none'
    img4.style.display = 'none'
}

// Create a function for showPhoto3
function showPhoto3(){
    img3.style.display = 'block'
    img1.style.display = 'none'
    img2.style.display = 'none'
    img4.style.display = 'none'
}

// Create a function for showPhoto4
function showPhoto4(){
    img4.style.display = 'block'
    img1.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'none'
}