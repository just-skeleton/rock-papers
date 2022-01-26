function computerPlay() {
    const gameOptions = ["rock", "paper", "scissors"];
    const gameSelect = gameOptions[Math.floor(Math.random() * gameOptions.length)];
    return gameSelect;
}
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = computerPlay();
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`);
        return "Player chose rock. Computer chose scissors. Player wins!";  
    }
    if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Player chose scissors. Computer chose paper. Player wins!";
    };
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Player chose paper. Computer chose rock. Player wins!";
    }; 
    if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose rock. Player chose scissors. Computer wins!";
    };
    if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose scissors. Player chose paper. Computer wins!";
    };
    if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose paper. Player chose rock. Computer wins!";
    };
    if (playerSelection == "rock" && computerSelection == "rock" ) {
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose rock. Player chose rock. It's a tie!";
    };
    if (computerSelection == "paper" && playerSelection == "paper") {
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose paper. Player chose paper. It's a tie!";
    };
    if (playerSelection == "scissors" && computerSelection == "scissors" ) {
        console.log(`Game score: Computer = ${computerScore} | Player = ${playerScore}`)
        return "Computer chose scissors. Player chose scissors. It's a tie!";
    };
  };

// console.log(game());
// console.log(playRound(computerSelection, playerSelection));
function game() {
    console.log(playRound(computerSelection, playerSelection));
}

game();
/*
}
console.log("Game over")
if(playerScore > computerScore) {
    console.log("Player Wins")
} else if (playerScore == computerScore) {
    console.log("Tie")
} else {
    console.log("Computer Wins");
}
}
*/