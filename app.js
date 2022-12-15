let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");


function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissor']
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice];
}

function userWin(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore; 
    result_p.innerHTML = userChoice + "beats" + computerChoice + " You Win!!!!";


    //console.log("WIN");
}

function userLose() {
    console.log("LOST");
}

function draw() {
    console.log("DRAW");
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissor':
        case "paperrock":
        case "scissorpaper":
            userWin();
            break;
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            userLose();
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            draw();
            break;
        
    }
    /*console.log("användare;    " + userChoice);
    console.log("dator;        " + computerChoice);*/
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock")
        //console.log("r")
    })

    paper_div.addEventListener('click', function() {
        game("paper")
        //console.log("p")
    })

    scissor_div.addEventListener('click', function() {
        game("scissor")
        //console.log("s")
    })
}
main();