

const options = ["rock", "paper", "scissors"] 
const loseTo = {"rock": "paper", "paper": "scissors", "scissors": "rock"}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    return options[num];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 0;
    }
    if (computerSelection == loseTo[playerSelection]) {
        return -1;
    }
    else {
        return 1;
    }
}

const numToLang = { '0': "Tie. ", '-1': "You lose! ", '1': "You Win! "}

let score = 0;


function game() {
    let playerChoice = (prompt("Pick Rock, Paper, or Scissors")).toLowerCase();
    if (!options.includes(playerChoice)) {
        game();
    }
    let comp = getComputerChoice();
    let round = playRound(playerChoice, comp);
    console.log(numToLang[round.toString()] + playerChoice + " vs. " + comp);
    return (round);
}

for (let i = 0; i < 5; i++) {
    score += game();
}

if (score > 0) {
    alert("You won! The final score was: " + score.toString());
}
if (score == 0) {
    alert("You tied! The final score was 0");
}
else {
    alert("You lost! The final score was: " + score.toString());
}
