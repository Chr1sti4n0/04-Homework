var timeEL = document.querySelector(".time");
var generateEl = document.querySelector("generate");
var home = document.querySelector(".homepage");
var startButton = document.querySelector(".start-button");
var quizQuestions = [
    {
        question: "An array starts counting at index _____.",
        answers: [
            {text: '0', correct: true},
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: false}
        ]
    },
]
var score = 0;

startButton.addEventListener('click', quizTimer)


//For loop to go through questions in array
for(var i=0; i < quizQuestions.length; i++) {
    //check the users selection
    var selection = console.log(quizQuestions[i].question);
}

//90 second timer function
var timeLeft = 90;

function quizTimer() {
    var timeInterval = setInterval(function() {
        timeLeft--;
        timeEL.textContent = "Time Remaining: " + timeLeft;

        if(timeLeft === 0) {
            clearInterval(timeInterval);
            completionMessage();
        }

    }, 1000);
}

function completionMessage() {
    timeEL.textContent = "Quiz is Complete!\n Your score is:";

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