// variables
var questionContainer = document.getElementById("questions");
var landingContainer = document.getElementById("landing");

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
    },
]

// creating my options in ol, li

var currectQuesIndex;

function startTimer() {
    //timer interval - timer called when the start button is click

}

function startQuiz () { 
    // hide landing page
    landingContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    // show first question

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

        optionButton.addEventListener('click', optionClicked)
        questionContainer.appendChild(optionButton)

        optionButton.setAttribute('style','background-color:#FF69B4; color: white; padding: 5px; margin-left')
    }

    // append/add to html ^ 
    //add attributes to the options - with color and font ??



}

function optionClicked(event) {
     //check correct or not
     //check if last question
    var correct = questions[currectQuesIndex].correctAns

    var userClicked = event.target.textContent

    if(userClicked === correct) {
        console.log("correct")
    }
    else { // prompt - wrong 
      console.log("wrong") 
    }

    currectQuesIndex++;
    displayQuestion()
}


function endQuiz(){

    // final score is ___
    // enter initials: local storage - link to high score list 
    //
}

document.getElementById("startQuiz").addEventListener('click', startQuiz)


