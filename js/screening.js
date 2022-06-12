const questionsArray = [
    {
        question: '1)  Who is the father of computers?',
        a: 'Charles Babbage',
        b: 'Blaise Pascal',
        c: 'Bill Gates',
        d: 'Herman Hollerith',
        correct_answer: 'Charles Babbage'
    },
    {
        question: '2)  What is the capital of France?',
        a: 'London',
        b: 'Paris',
        c: 'Madrid',
        d: 'Rome',
        correct_answer: 'Paris'
    },
    {
        question: '3)  Who is the president of Nigeria?',
        a: 'Goodluck Jonathan',
        b: 'Bola Tinubu',
        c: 'Mohammadu Buhari',
        d: 'Olusegun Obasanjo',
        correct_answer: 'Mohammadu Buhari'
    },
    {
        question: '4)  ______ is a name of any person, animal, place or things',
        a: 'Adverb',
        b: 'Verb',
        c: 'Pronouns',
        d: 'Noun',
        correct_answer: 'Noun'
    },

]

// Declaration of variables
const questionContainer = document.getElementById('questionContainer')
const optionContainer = document.getElementById('optionContainer')
const next =document.getElementById('next')
const submit =document.getElementById('submit')
const myScore =document.getElementById('score')

// Initialize the variable myQuiz = 0
let myQuiz = 0;

// Initialize the variable score = 0
let score = 0;

// Hide the submit button
submit.style.display = 'none'

// To load questions
function loadQuiz(){
    let myQuest = questionsArray[myQuiz]
    // Output questions to the screen
    let myQuestion = myQuest.question
    questionContainer.textContent = myQuestion
    // Output options to the screen
    let options = `
        <input type = 'radio' name = 'option' value = '${myQuest.a}'/> ${myQuest.a} <br><br>
        <input type = 'radio' name = 'option' value = '${myQuest.b}'/> ${myQuest.b} <br><br>
        <input type = 'radio' name = 'option' value = '${myQuest.c}'/> ${myQuest.c} <br><br>
        <input type = 'radio' name = 'option' value = '${myQuest.d}'/> ${myQuest.d} <br><br>
    `
    optionContainer.innerHTML = options
}
loadQuiz()

// Add an event listener
next.addEventListener('click', nextQuest)

// Create a function
function nextQuest(){
    let radioCheck = document.querySelector('input[type = radio]:checked')
    if(!radioCheck){
        alert('Pleae select an option')
    }
    else{
        if(myQuiz === questionsArray.length - 1){
            submit.style.display = 'block'
            next.style.display = 'none'
        }

        if(radioCheck.value === questionsArray[myQuiz].correct_answer){
            score += 5
            alert(`You have scored ${score}`)
        }
        myQuiz++
        loadQuiz()
    }
}

// Add an event to submit
submit.addEventListener('click', displayResult)

// Create a function
function displayResult(){
    questionContainer.style.display = 'none'
    optionContainer.style.display = 'none'
    next.style.display = 'none'
    submit.style.display = 'none'
    myScore.innerHTML = score
}