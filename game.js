function randomNumberInRange(min, max) {
    return (Math.floor(Math.random() * (max+1) + min))
}

function computerPlay() {
    return (["Rock", "Paper", "Scissors"][randomNumberInRange(0, 2)])
}

function playRound() {
    let playerChoice = rockPaperOrScissors()
    let comChoice = computerPlay()
    console.log(`You chose ${playerChoice} and Computer chose ${comChoice}`)
    if (playerChoice === comChoice) {
        return ("It's a draw! You both chose the same element.")
    }
        else if (winnerElement(playerChoice, comChoice) === playerChoice) {
        return (`You won! ${playerChoice} beats ${comChoice}`)
    }
        else if (winnerElement(playerChoice, comChoice) === comChoice) {
        return (`You lose :( ${comChoice} beats ${playerChoice}`)
    }
}

function winnerElement(element1, element2) {
    if (element1 === element2) {
        return (element1)
    }    
        else if ((element1 === "Rock" && element2 === "Paper") || (element1 === "Paper" && element2 === "Rock")) {
            return ("Paper")
        }
        else if ((element1=== "Paper" && element2 === "Scissors") || (element1 === "Scissors" && element2 ==="Paper")) {
            return ("Scissors")
        }
        else if ((element1=== "Rock" && element2 === "Scissors") || (element1 === "Scissors" && element2 === "Rock")) {
            return ("Rock")
        }
}

