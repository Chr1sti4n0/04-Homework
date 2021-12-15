var timeEl = document.querySelector(".time");
var generateEl = document.querySelector(".generate");
var home = document.querySelector(".homepage");
var startButton = document.querySelector(".start-button");
var questionEl = document.querySelector(".question-title");
var button1 = document.querySelector(".btn1");
var button2 = document.querySelector(".btn2");
var button3 = document.querySelector(".btn3");
var button4 = document.querySelector(".btn4");
var choicesContainer = document.querySelector(".choices");
var answerButtons = document.querySelector(".buttons");
var initialsPrompt = document.querySelector(".initials-prompt");
var answerFeedback = document.querySelector(".answerFeedback");
var currentQuestion = 0;
var quizQuestions = [
    {
        question: "An array starts counting at index _____.",
        answers: [
            {text: '0',},
            {text: '1',},
            {text: '2',},
            {text: '3',}
        ],
        correct: "0"
    },
    {
        question: "A class that was created in HTML, can be referenced in CSS using which of the following symbols:",
        answers: [
            {text: '!',},
            {text: '?',},
            {text: '$',},
            {text: '.',}
        ],
        correct: "."
    },
    {
        question: "An ID that was created in HTML, can be referenced in CSS using which of the following symbols:",
        answers: [
            {text: '.',},
            {text: '*',},
            {text: '#'},
            {text: '$',}
        ],
        correct: "#"
    }
]
//Variable to track score
var score = 0;

//When Start Button is clicked the quizTimer function will begin
startButton.addEventListener('click', function () {
    quizTimer();
    startQuiz();
});

//Event Listener to evaluate the users selection, move onto the next question, add points to the score and subtract 10 seconds if necessary 
answerButtons.addEventListener('click', function (event) {
    var userChoice = event.target.innerText;
    if (userChoice === quizQuestions[currentQuestion].correct) {
        console.log("Correct")
        currentQuestion++; 
        score = score + 1;
    } else {
        console.log("Incorrect");
        currentQuestion++; 
        timeLeft = timeLeft - 10;
    }
    displayQuestion();
});

//Functions to run when quiz is started
function startQuiz() {
    //Removes the CSS set in choices ID  
    home.classList.add('choices');
    choicesContainer.classList.remove('choices');
    displayQuestion();
}

//Function to display each question
function displayQuestion() {
    //Choices/Questions will be hidden when all of the questions have been answered
    if (currentQuestion === quizQuestions.length) {
        choicesContainer.classList.add('choices');
        timeLeft = 1;
        return;
    }
    questionEl.textContent = quizQuestions[currentQuestion].question;
    button1.textContent= quizQuestions[currentQuestion].answers[0].text;
    button2.textContent= quizQuestions[currentQuestion].answers[1].text;
    button3.textContent= quizQuestions[currentQuestion].answers[2].text;
    button4.textContent= quizQuestions[currentQuestion].answers[3].text;
}


//90 second timer function
var timeLeft = 90;

function quizTimer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time Remaining: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            completionMessage();
            //recordScore();
        }

    }, 1000);
}

//When the quiz is complete the score will be displayed, choices class will be hidden and the initials prompt will appear
function completionMessage() {
    timeEl.textContent = "Quiz is Complete!\n Your score is: " + score;
    choicesContainer.classList.add('choices');
    initialsPrompt.classList.remove('initials-prompt');
}


//Makes the elements hide
function hide(element) {
    element.style.display = "none";
 }

 //Makes the elements display
function display(element) {
    element.style.display = "block";
 }

//  let recordScore = JSON.stringify(score);
//  localStorage.setItem("score", recordScore);
//  console.log(localStorage);
//Create function to record scores
// function recordScore() {
//     var savedScore = localStorage.getItem("score");
//     score.textContent = savedScore; 
//   }