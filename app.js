let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");


function getComputerChoice() {
    let choices = ['r', 'p', 's']
    let randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice];
}

function convertToReadable(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"
}

function userWin(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToReadable(userChoice) + " (user)" + " beats " + convertToReadable(computerChoice) + " (comp) " + ". You Win!!"
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow'); }, 1500);
}



function userLose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToReadable(userChoice) + " (user)" + " loses to " + convertToReadable(computerChoice) + " (comp) " + ". You lost :(" 
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow'); }, 1500);
}

function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToReadable(userChoice) + " (user)" + " are the same  " + convertToReadable(computerChoice) + " (comp) " + " It is a DRAW!"
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('yellow-glow'); }, 1500);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case "pr":
        case "sp":
            userWin(userChoice, computerChoice);
            //console.log("USER WIN")
            break;
        case "rp":
        case "ps":
        case "sr":
            userLose(userChoice, computerChoice);
            //console.log("USER LOSE")
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            //console.log("DRAW")
            break;
        
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("r")
    })

    paper_div.addEventListener('click', function() {
        game("p")
    })

    scissor_div.addEventListener('click', function() {
        game("s")
    })
}

main();