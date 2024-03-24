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

function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === computerSelection) {
        return `It's a tie! You and Computer both chose ${playerSelection}!`
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${playerSelection}!`
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `You Win! Computer chose ${computerSelection}, and ${playerSelection} beats ${computerSelection}!`
    }
}

let playerHand = "";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const result = document.createElement("p");
const resultsDiv = document.querySelector(".results");
const tally = document.createElement("p");

function rockHand() {
    playerHand = rock.className;

    let round = playRound(playerHand, getComputerChoice());
    resultsDiv.appendChild(result);
    result.textContent = round;
};

function paperHand() {
    playerHand = paper.className;

    let round = playRound(playerHand, getComputerChoice());
    resultsDiv.appendChild(result);
    result.textContent = round;
};

function scissorsHand() {
    playerHand = scissors.className;
    
    let round = playRound(playerHand, getComputerChoice());
    resultsDiv.appendChild(result);
    result.textContent = round;
};


// buttons.forEach(button => {
//     const playerChoice = button.className;
//     let count = 0;
//     let compTally = 0;
//     let playerTally = 0;
//     let tie = 0;
    
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

//             const win = "Win";
//             const lose = "Lose";
//             const draw = "tie"

//             if (result.textContent.indexOf(lose) !== -1) {
//                 compTally++;
//                 tally.textContent = `Player: ${playerTally} Tie: ${tie} Computer: ${compTally}`;
//                 resultsDiv.appendChild(tally);
//                 return compTally;
//             } else if (result.textContent.indexOf(win) !== -1) {
//                 playerTally++;
//                 tally.textContent = `Player: ${playerTally} Tie: ${tie} Computer: ${compTally}`;
//                 resultsDiv.appendChild(tally);
//                 return playerTally;
//             } else {
//                 tie++;
//                 tally.textContent = `Player: ${playerTally} Tie: ${tie} Computer: ${compTally}`;
//                 resultsDiv.appendChild(tally);
//                 return tie++;
//             };
            
            
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