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
    let text = playerSelection.toLowerCase()
    if (text != "rock" && text != "paper" && text != "scissors") {
        return "Invalid input! Please enter 'rock', 'paper', or 'scissors'."
    }

    if (text === computerSelection) {
        return `It's a tie! You and Computer both chose ${text}`
    }
}