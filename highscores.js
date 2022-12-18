var scoreHistory = JSON.parse(localStorage.getItem("scoreHistory")) || [];
var clearHighscore = document.getElementById("clearhighscore")

for (let index = 0; index < scoreHistory.length; index++) {
    const element = scoreHistory[index];

    //
    var initials = document.createElement('td')
    initials.textContent = scoreHistory[index].initials;

    var score = document.createElement('td')
    score.textContent = scoreHistory[index].score;

    var tr = document.createElement('tr')
    tr.appendChild(initials)
    tr.appendChild(score)

    document.getElementById("tbody").appendChild(tr)
    
}


//event listener ...

clearHighscore.addEventListener('click',function() {
    localStorage.clear()
    document.getElementById("tbody").innerHTML= ""
} );