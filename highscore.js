//variables
var highscoreContainer =document.getElementById("highscore");
var userInitials= document.getElementById("user-initials");


var lastInitials;

function renderedLastRegistered (){
    var initials =localStorage.getItem("initials");

    if (!initials) {
        return;
    }
    userInitials.textContent= initials;
}

    
  submitContainer.addEventListener("click" ,function(event){
    event.preventDefault();

    var initials= document.getElementById("initials").value;
    lastInitials=initials;
    localStorage.setItem("initials",initials);

    
    }
);