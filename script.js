function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    const gameSelect = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return gameSelect;
}

const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
const computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;
const score = `Game score: Computer = ${computerScore} | Player = ${playerScore}`;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        console.log("Player chose rock. Computer chose scissors. Player wins!");
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        console.log ("Player chose scissors. Computer chose paper. Player wins!")
    };
    if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Player chose paper. User chose rock. Player wins!")
    }; 
    if (computerSelection == "rock" && playerSelection == "scissors") {
        console.log("Computer chose rock. Player chose scissors. Computer wins!")
    };
    if (computerSelection == "scissors" && playerSelection == "paper") {
        console.log("Computer chose scissors. Player chose paper. Computer wins!")
    };
    if (computerSelection == "paper" && playerSelection == "rock") {
        console.log("Computer chose paper. Player chose rock. Computer wins!")
    };
    if (computerSelection == "rock" && playerSelection == "rock") {
        console.log("Computer chose rock. Player chose rock. It's a tie!")
    };
    if (computerSelection == "paper" && playerSelection == "paper") {
        console.log("Computer chose paper. Player chose paper. It's a tie!")
    };
    if (computerSelection == "scissors" && playerSelection == "scissors") {
        console.log("Computer chose scissors. Player chose scissors. It's a tie!")
    };

  };
  





