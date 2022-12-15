// variables
var questionContainer = document.getElementById("questions");
var landingContainer = document.getElementById("landing");
var timeEl = document.getElementById("time");
var endingContainer = document.getElementById("endpage");
var submitContainer = document.getElementById("submit");

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
    landingContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    // show first question
    startTimer()
    currectQuesIndex = 0;
    displayQuestion()
}

function displayQuestion() {
    questionContainer.innerHTML = ''
    // display question title
    var title = document.createElement('h2')
    title.textContent = questions[currectQuesIndex].title
    // display question options
    questionContainer.appendChild(title)
 
    for (let index = 0; index < questions[currectQuesIndex].options.length; index++) {
        var optionButton = document.createElement('button')
        optionButton.textContent = questions[currectQuesIndex].options[index]

          // append/add to html ^ 

        optionButton.addEventListener('click', optionClicked)
        questionContainer.appendChild(optionButton)

        optionButton.setAttribute('style','background-color:#FF69B4; color: white; padding: 5px; margin-left')
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
     // hide question page , show new ending enq quiz
     questionContainer.classList.add("hidden");
     endingContainer.classList.remove("hidden");


     //put the time remaining = the score
     if (secondsLeft >= 0) {
        var timeRemaining =secondsLeft;
        var createP2 = document.getElementById("score");
        clearInterval(timeRemaining);
        createP2.textContent = timeRemaining;
     }
}


//local storage save iniitials to highscore list?
     //document.getElementById("initials").innerHTML = " "; // to clear textContent
     //document.getElementById("initials").innerHTML = " "<div></div> //to append



document.getElementById("startQuiz").addEventListener('click', startQuiz)