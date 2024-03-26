function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';
    }
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const result = document.createElement("p");
const resultsDiv = document.querySelector(".results");
const tally = document.createElement("p");
const winner = document.createElement("p");

let compTally = 0;
let playerTally = 0;
let tieTally = 0;
const win = "Win";
const lose = "Lose";
const draw = "Tie";
let playerHand = "";

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        result.textContent = `It's a Tie! You and Computer both chose ${playerSelection}!`;
        resultsDiv.appendChild(result);
        tieTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`;
        resultsDiv.appendChild(result);
        compTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result.textContent = `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`;
        resultsDiv.appendChild(result);
        playerTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        result.textContent = `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`;
        resultsDiv.appendChild(result);
        compTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`;
        resultsDiv.appendChild(result);
        playerTally++
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        result.textContent = `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`;
        resultsDiv.appendChild(result);
        compTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        result.textContent = `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`;
        resultsDiv.appendChild(result);
        playerTally++;
        tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
        resultsDiv.appendChild(tally);
    }
}



// function scoreTally() {
//     if (result.textContent.indexOf(lose) !== -1) {
//         compTally++;
//         tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
//         resultsDiv.appendChild(tally);
//         return compTally;
//     } else if (result.textContent.indexOf(win) !== -1) {
//         playerTally++;
//         tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
//         resultsDiv.appendChild(tally);
//         return playerTally;
//     } else {
//         tieTally++;
//         tally.textContent = `Player: ${playerTally} Tie: ${tieTally} Computer: ${compTally}`;
//         resultsDiv.appendChild(tally);
//         return tieTally++;
//     };
// };

function announceWinner() {
    if (playerTally === 5) {
        winner.textContent = "Player Wins! Congratulations!"
        resultsDiv.appendChild(winner);
        return;
    } else if (compTally === 5) {
        winner.textContent = "The Computer Wins! Better luck next time!"
        resultsDiv.appendChild(winner);
        return;
    };
};

function rockHand() {
    playerHand = rock.className;

    playRound(playerHand, getComputerChoice());
    // resultsDiv.appendChild(result);
    // result.textContent = round;

    // scoreTally();
    announceWinner();
};

function paperHand() {
    playerHand = paper.className;

    playRound(playerHand, getComputerChoice());
    // resultsDiv.appendChild(result);
    // result.textContent = round;

    // scoreTally();
    announceWinner();
};

function scissorsHand() {
    playerHand = scissors.className;
    
    playRound(playerHand, getComputerChoice());
    // resultsDiv.appendChild(result);
    // result.textContent = round;

    // scoreTally();
    announceWinner();
};


// buttons.forEach(button => {
//     const playerChoice = button.className;
//     let count = 0;
    
    
//     button.addEventListener("click", () => {
//         return count++;
//     })
    
//     button.addEventListener("click", () => {
//         if (count < 5) {
//             const round = playRound(playerChoice, getComputerChoice());

            // const result = document.createElement("p");
            // const resultsDiv = document.querySelector(".results")
            // const tally = document.createElement("p");

            // resultsDiv.appendChild(result);
            // result.textContent = `Round ${count}: ` + round;

            


            
            
//         }
//     });
// });

function playGame() {
    
    // for (let i = 0; i < 5; i++) {
    console.log("Round 1:", playRound(playerChoice(), getComputerChoice()));
    // }
    console.log("Thanks for playing!")
}

// playGame()
rock.addEventListener("click", rockHand);
paper.addEventListener("click", paperHand);
scissors.addEventListener("click", scissorsHand);