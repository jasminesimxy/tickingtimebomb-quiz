var userInitials= document.getElementById("user-initials");

function renderedLastRegistered (){
    var initials =localStorage.getItem("initials");

    if (!initials) {
        return;
    }

    userInitials.textContent= initials;
}


//another page - highscore page ith local storage of  render last registered
function highscoreList(){ 
 

}
