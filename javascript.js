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

buttons.forEach(button => {
    const playerChoice = button.classList.value;
    
    button.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(playerChoice, computerChoice);
    })
});

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

function playGame() {
    
    // for (let i = 0; i < 5; i++) {
    console.log("Round 1:", playRound(playerChoice(), getComputerChoice()));
    // }
    console.log("Thanks for playing!")
}

// playGame()
