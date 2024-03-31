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

    if ((compTally === 0) && (playerTally === 0) && (tieTally === 0)) {
        if (winner.textContent) {
            resultsDiv.removeChild(winner);
        }
    };

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

    if (playerTally === 5) {
        // Setting this css style allows for line break in winner.textContent
        winner.setAttribute('style', 'white-space: pre;');
        
        // Adding '\r\n' allows for line break in winner.textContent
        winner.textContent = "Player Wins! Congratulations!\r\n";
        winner.textContent += 'Click any button to start over!'
        resultsDiv.appendChild(winner);
        compTally = 0;
        playerTally = 0;
        tieTally = 0;
    } else if (compTally === 5) {
        // Setting this css style allows for line break in winner.textContent
        winner.setAttribute('style', 'white-space: pre;');

        // Adding '\r\n' allows for line break in winner.textContent
        winner.textContent = "The Computer Wins! Better luck next time!\r\n";
        winner.textContent += 'Click any button to start over!'
        resultsDiv.appendChild(winner);
        compTally = 0;
        playerTally = 0;
        tieTally = 0;
    };
}

function rockHand() {
    playerHand = rock.className;
    playRound(playerHand, getComputerChoice());
};

function paperHand() {
    playerHand = paper.className;
    playRound(playerHand, getComputerChoice());
};

function scissorsHand() {
    playerHand = scissors.className;
    playRound(playerHand, getComputerChoice());
};

rock.addEventListener("click", rockHand);
paper.addEventListener("click", paperHand);
scissors.addEventListener("click", scissorsHand);