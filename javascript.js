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
    announceWinner();
};

function paperHand() {
    playerHand = paper.className;

    playRound(playerHand, getComputerChoice());
    announceWinner();
};

function scissorsHand() {
    playerHand = scissors.className;
    
    playRound(playerHand, getComputerChoice());
    announceWinner();
};

rock.addEventListener("click", rockHand);
paper.addEventListener("click", paperHand);
scissors.addEventListener("click", scissorsHand);