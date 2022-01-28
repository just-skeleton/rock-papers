function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    const gameSelect = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return gameSelect;
}

let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose rock. Computer chose scissors. Player wins!";
    };
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose scissors. Computer chose paper. Player wins!";
    };
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose paper. Computer chose rock. Player wins!";
    };
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose scissors. Computer chose rock. Computer wins!";
    };
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose paper. Computer chose scissors. Computer wins!";
    };
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose rock. Computer chose paper. Computer wins!";
    };
    if (playerSelection == "rock" && computerSelection == "rock") {
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose rock. Computer chose rock. It's a tie!";
    };
    if (computerSelection == "paper" && playerSelection == "paper") {
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose paper. Computer chose paper.  It's a tie!";
    };
    if (playerSelection == "scissors" && computerSelection == "scissors") {
        console.log(`---- Game score: Player = ${playerScore} | Computer = ${computerScore} ----`)
        return "Player chose scissors. Computer chose scissors. It's a tie!";
    };
};

function game() {
    while (computerScore < 5 && playerScore < 5) {
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("GAME OVER")
    if (playerScore > computerScore) {
        console.log("Player Wins")
    } else if (playerScore == computerScore) {
        console.log("Tie")
    } else {
        console.log("Computer Wins");
    }
}

game();