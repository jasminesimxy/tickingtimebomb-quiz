//variables
var highscoreContainer =document.getElementById("highscore");
var userInitials= document.getElementById("user-initials");


function renderedLastRegistered (){
    var initials =localStorage.getItem("initials");

    if (!initials) {
        return;
    }

    userInitials.textContent= initials;
}


