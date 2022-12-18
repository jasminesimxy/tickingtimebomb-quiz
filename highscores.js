var scoreHistory = JSON.parse(localStorage.getItem("scoreHistory")) || [];
var clearHighscore = document.getElementById("clearhighscore")
var headingsContainer = document.querySelector("tr");

headingsContainer.setAttribute('style', 'font-size: 20px; color: black;font-weight: bolder; padding:100px;alignItems:center')

for (let index = 0; index < scoreHistory.length; index++) {
    const element = scoreHistory[index];

    //initials
    var initials = document.createElement('td')
    initials.textContent = scoreHistory[index].initials;
    initials.setAttribute('style' , 'font-size: 20px; color:black;font-weight: bolder; padding:10px 10px;  alignItems:center') 

    //scores
    var score = document.createElement('td')
    score.textContent = scoreHistory[index].score;
    score.setAttribute('style' , 'font-size: 20px; color:black;font-weight:bolder;padding: 10px 10px;alignItems:center') 

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

clearHighscore.setAttribute('style' , 'font-size: 20px; color:#fc1750;font-weight: bolder; padding-left: 30px; padding-right:30px;alignItems:center') 
