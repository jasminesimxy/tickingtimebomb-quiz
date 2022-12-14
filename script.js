// variables
var questionContainer = document.getElementById("questions");
var landingContainer = document.getElementById("landing");
var timeEl = document.getElementById("time");
var endingContainer = document.getElementById("endpage");
var submitContainer = document.getElementById("submit");
var initialsInput =document.getElementById("initials");
var scoreInput = document.getElementById("score");

var scoreContainer = document.getElementById("highscorePage");
var scoreHistory = JSON.parse(localStorage.getItem("scoreHistory")) || [];

var backButton =document.getElementById("backbutton");
var clearButton = document.getElementById("clearhighscore");

//questions with options
var questions = [
    {
        title: "Question 1", 
        options: ['option1', 'option2', 'option3', 'abc'],
        correctAns: 'option1'
    },

    {
        title: "Question 2", 
        options: ['option1', 'option2', 'option3', 'js'],
        correctAns: 'js'
    },
    { 
        title: "Question 3", 
        options: ['option1', 'option2', 'option3', 'functions are good'],
        correctAns: 'functions are good'
    }, 
    {
        title: "Question 4", 
        options: ['option1', 'option2', 'option3'],
        correctAns: 'option1'
    }
]
var currectQuesIndex;

var secondsLeft = 90;

function startTimer() { 
//when i start on quiz, i start timer   
     //check if it is last question by comparing my index with my length -1 b/c index != to length and you want it to be true for the if statement so you send the mesasge of (0 seconds)
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + 'seconds remaining';

        if((secondsLeft === 0) || (currectQuesIndex === questions.length -1)){
            clearInterval(timeInterval);
        }
       
    },1000);
}


function startQuiz () { 
    // hide landing page
    landingContainer.style.display="none";
    questionContainer.style.display="block";
    // show first question
    startTimer()
    currectQuesIndex = 0;
    displayQuestion()
}

function displayQuestion() {
    questionContainer.innerHTML = '';
    // display question title
    var title = document.createElement('h2')
    title.textContent = questions[currectQuesIndex].title 
    title.setAttribute('style' , 'font-size: 30px; color:#fc1750;font-weight: bolder; margin-left; padding-left: 40px;padding-bottom:40px;') 
    // display question options
    questionContainer.appendChild(title)
 
    for (let index = 0; index < questions[currectQuesIndex].options.length; index++) {
        var optionButton = document.createElement('button')
        optionButton.textContent = questions[currectQuesIndex].options[index]

          // append/add to html ^ 

        optionButton.addEventListener('click', optionClicked)
        questionContainer.appendChild(optionButton)

        optionButton.setAttribute('style','background-color:#fc1750; color: white; padding: 5px; margin:25px; padding bottom:40px; ')
    }
}

function optionClicked(event) {
     //check correct or not 

    var correct = questions[currectQuesIndex].correctAns

    var userClicked = event.target.textContent

    if(userClicked === correct) {
        console.log("correct")
    }
    else if (userClicked != correct) {
      console.log("wrong")
      secondsLeft = secondsLeft - 5
    }
    
    if(currectQuesIndex < questions.length-1){
        currectQuesIndex++;
        displayQuestion()
    } else {
        timeEl.textContent ="0";
        endQuiz();
    }
    
}


function endQuiz(){
     // hide question page , show new ending page quiz
     questionContainer.style.display="none";
     endingContainer.style.display= "block";

     //put the time remaining = the score
     if (secondsLeft >= 0) {
        var timeRemaining =secondsLeft;
        var createP2 = document.getElementById("score");
        clearInterval(timeRemaining);
        createP2.textContent = timeRemaining;
     }
     
}

//local storage  -saving


submitContainer.addEventListener("click", function(event) {
    event.preventDefault();

var scoreKeys = {
    initials: initialsInput.value,
    score: secondsLeft
};

scoreHistory.push(scoreKeys)//push scorekeys object into scoreHistory array 
localStorage.setItem("scoreHistory", JSON.stringify(scoreHistory));
});

console.log(scoreHistory);

// store history in local storage??
// function renderLastUserInput() {
//     var UserInput =scoreHistory;
//     if (UserInput != null ) {
//         initialsInput.innerHTML = UserInput.initials;
//         scoreInput.innerHTML =UserInput.score;
//     }
//     else { // if user is the first user to submit initials then this would happen
//         scoreHistory=[]; 
//     }

//     // for loop to push the scorehistory array - show screen ??
//     for (var i = 0; i < scoreHistory; i++) {
//         scoreHistory.push("scoreKeys");
//     }
// };
    
//event listener highscore 
// function displayHighScore () {
//     //hide question and ending , show highscore page when click

//     questionContainer.classList.add("hidden");
//     endingContainer.classList.add("hidden");
//     scoreContainer.classList.remove("hidden");


//     backButton.addEventListener('click', startQuiz)
//     clearButton.localStorage.removeItem('renderLastUserInput');

// //high score visible
// //create dynabmic table -google-based on data
// //retrieve data from local storage 

// };

// function init(){
//     // renderLastUserInput();
// }
// init();



document.getElementById("startQuiz").addEventListener('click', startQuiz);



