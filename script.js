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
        question: "What color is the sky_____.",
        answers: [
            {text: '0',},
            {text: '1',},
            {text: '2',},
            {text: '3',}
        ],
        correct: "0"
    }
]
var score = 0;


//When Start Button is clicked the quizTimer function will begin
startButton.addEventListener('click', function () {
    quizTimer();
    startQuiz();
});

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

//Function to start the Quiz
function startQuiz() {
    //Removes the CSS set in choices ID  
    home.classList.add('choices');
    choicesContainer.classList.remove('choices');
    displayQuestion();
}

//Function to display each question
function displayQuestion() {
    if (currentQuestion === quizQuestions.length) {
        choicesContainer.classList.add('choices');
        return;
    }
    questionEl.textContent = quizQuestions[currentQuestion].question;
    button1.textContent= quizQuestions[currentQuestion].answers[0].text;
    button2.textContent= quizQuestions[currentQuestion].answers[1].text;
    button3.textContent= quizQuestions[currentQuestion].answers[2].text;
    button4.textContent= quizQuestions[currentQuestion].answers[3].text;
    //Add IF statement to evaluate user selection (correct/incorrect)
    //Move onto next question
}



//For loop to go through questions in array
// for(var i=0; i < quizQuestions.length; i++) {
//     //check the users selection
//     var selection = console.log(quizQuestions[i].question);
// }



//90 second timer function
var timeLeft = 90;

function quizTimer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timeEl.textContent = "Time Remaining: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            completionMessage();
        }

    }, 1000);
}

function completionMessage() {
    timeEl.textContent = "Quiz is Complete!\n Your score is:";
    choicesContainer.classList.add('choices');
}

// document.getElementById("generate").addEventListener("click", function () {
//     hide(home);
//     hide(startButton);
//     display(quizTimer);
// });

//Makes the elements hide
function hide(element) {
    element.style.display = "none";
 }

 //Makes the elements display
function display(element) {
    element.style.display = "block";
 }