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

const buttons = document.querySelectorAll("button");

function playRound(playerSelection, computerSelection) {
    buttons.forEach(button => {
        button.addEventListener("click", () => {

        })
    });

    if (text === computerSelection) {
        return `It's a tie! You and Computer both chose ${text}!`
    } else if (text === "rock" && computerSelection === "paper") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${text}!`
    } else if (text === "rock" && computerSelection === "scissors") {
        return `You Win! Computer chose ${computerSelection}, and ${text} beats ${computerSelection}!`
    } else if (text === "paper" && computerSelection === "scissors") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${text}!`
    } else if (text === "paper" && computerSelection === "rock") {
        return `You Win! Computer chose ${computerSelection}, and ${text} beats ${computerSelection}!`
    } else if (text === "scissors" && computerSelection === "rock") {
        return `You Lose! Computer chose ${computerSelection}, and ${computerSelection} beats ${text}!`
    } else if (text === "scissors" && computerSelection === "paper") {
        return `You Win! Computer chose ${computerSelection}, and ${text} beats ${computerSelection}!`
    }
}

function playGame() {
    // let answer = prompt("Let's play! Enter 'rock', 'paper', or 'scissors'!")
    // for (let i = 0; i < 5; i++) {
    //     console.log(`Round ${i+1}:`, playRound(answer, getComputerChoice()));
    // }
    console.log("Thanks for playing!")
}

playGame()
