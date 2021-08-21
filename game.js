function randomNumberInRange(min, max) {
    return (Math.floor(Math.random() * (max+1) + min))
}

function computerPlay() {
    return (["Rock", "Paper", "Scissors"][randomNumberInRange(0, 2)])
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return ("It's a draw! You both chose the same element.")
    }
        else if (winnerElement(playerSelection, computerSelection).toLowerCase() === playerSelection.toLowerCase()) {
        return (`You won! ${playerSelection} beats ${computerSelection}`)
    }
        else if (winnerElement(playerSelection, computerSelection).toLowerCase() === computerSelection.toLowerCase()) {
        return (`You lose :( ${computerSelection} beats ${playerSelection}`)
    }
}

function winnerElement(element1, element2) {
    if (element1.toLowerCase() === element2.toLowerCase()) {
        return (element1)
    }    
        else if ( (element1.toLowerCase() === "rock" &&
            element2.toLowerCase() === "paper") || (element1.toLowerCase() === "paper" && element2.toLowerCase() === "rock" ) ) {
            return ("Paper")
    }
        else if ( (element1.toLowerCase() === "paper" &&
            element2.toLowerCase() === "scissors") || (element1.toLowerCase() === "scissors" && element2.toLowerCase() ==="paper") ) {
            return ("Scissors")
        }
        else if ( (element1.toLowerCase() === "rock" &&
            element2.toLowerCase() === "scissors") || (element1.toLowerCase() === "scissors" && element2.toLowerCase() === "rock") ) {
            return ("Rock")
        }
}


