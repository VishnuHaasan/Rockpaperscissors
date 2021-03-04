let possibilities = ["rock","paper","scissors"];
let humanoption;
let computeroption;
let i =0;
let playerscore = 0,computerscore = 0;
const comment = document.getElementById("gose");
const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
let elements = document.querySelectorAll("img");
elements.forEach((ex) => ex.addEventListener("click",function(){
    func(ex);
}));
function func(ex) {
    if(gameover()){
        alert('Game is over');
        return;
    }
    switch(ex.id) {
        case "rock" : humanoption = 0;
                        break;
        case "paper" : humanoption = 1;
                        break;
        case "scissors" : humanoption = 2;
                        break;
    }
    findwinner(humanoption);
    updatescore(playerscore,computerscore);
}
function findwinner(option) {
    let coption = generaterandom();
    if(coption === option){
        comment.textContent = "Its a Tie,Both of you chose " + possibilities[option];
    }
    else if(option === 0 && coption === 2 || option === 1 && coption === 0 || option === 2 && coption === 1){
        comment.textContent = "You Won,You chose " + possibilities[option] + " and the Computer chose " + possibilities[coption];
        updatescore(playerscore++,computerscore);
    }
    else{
        comment.textContent = "You Lost,You chose " + possibilities[option] + " and the Computer chose " + possibilities[coption];
        updatescore(playerscore,computerscore++);
    }
}
function updatescore(p,c) {
    player.textContent = "Player : " + p;
    computer.textContent = "Computer : " + c;
}
function generaterandom() {
    return Math.floor(Math.random()*2.99);
}
function gameover() {
    if(playerscore == 5 || computerscore == 5)
    return true;
    else
    return false;
}