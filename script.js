let possibilities = ["rock","paper","scissors"];
let humanoption;
let computeroption;
let i =0;
let playerscore = 0,computerscore = 0;
const comment = document.getElementById("gose");
const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
let elements = document.querySelectorAll("img");
const parent = document.querySelector('main');
const child = document.createElement('div');
const before = document.querySelector('.icons');
const pback = document.createElement('img');
const cback = document.createElement('img');
pback.classList.add('player','scors');
cback.classList.add('computer','scors');
child.appendChild(pback);
child.appendChild(cback);
child.style.display = 'none';
child.classList.add('results');

elements.forEach((ex) => ex.addEventListener("click",function(){
    func(ex);
}));
function func(ex) {
    if(gameover() === 1){
        alert('Game is over, You have Won, Press F5 or reload the page to play again.');
        return;
    }
    else if(gameover()===2){
        alert('Game is over, The computer has Won, Press F5 or reload the page to play again.');
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
    createBoard(option,coption);
}
function updatescore(p,c) {
    player.textContent = "Player : " + p;
    computer.textContent = "Computer : " + c;
}
function generaterandom() {
    return Math.floor(Math.random()*2.99);
}
function gameover() {
    if(playerscore === 5 )
    return 1; 
    if(computerscore === 5)
    return 2;
    return 0;
}
function createBoard(p,c){
    child.style.display = 'flex';
    child.style.flexDirection = 'row';
    parent.style.height = '100%';
    child.style.width = '100vw';
    child.style.flexWrap = 'wrap';
    child.style.justifyContent = 'center';
    child.style.alignItems = 'center';
    child.style.height = '300px';
    pback.style.height = '100%';
    cback.style.height = '100%';
    pback.style.margin = '50px';
    child.style.padding = '50px';
    cback.style.margin = '50px';
    pback.style.border = '5px solid black';
    cback.style.border = '5px solid black';
    pback.style.borderRadius = '10px';
    cback.style.borderRadius = '10px';
    child.style.overflow = 'hidden';
    child.style.overflowY = 'scroll';
    switch(p) {
        case 0 : pback.setAttribute('src','./images/Rock.jpg');
        break;
        case 1 : pback.setAttribute('src','./images/Paper.jpg');
        break;
        case 2 : pback.setAttribute('src','./images/Scissors.jpg');
        break;
    }
    switch(c) {
        case 0 : cback.setAttribute('src','./images/Rock.jpg');
        break;
        case 1 : cback.setAttribute('src','./images/Paper.jpg');
        break;
        case 2 : cback.setAttribute('src','./images/Scissors.jpg');
        break;
    }
    parent.insertBefore(child,before);
}