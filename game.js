function randomNumberInRange(min, max) {
    return (Math.floor(Math.random() * (max+1) + min))
}

function computerPlay() {
    return (["Rock", "Paper", "Scissors"][randomNumberInRange(0, 2)])
}

function rockPaperOrScissors(){
    switch (prompt(`Please enter the number of your option:\n1 - Rock\n2 - Scissors\n3 - Paper`)) {
        case "1":
            return ("Rock")
            break;
        case "2":
            return ("Paper")
            break;
        case "3":
            return ("Scissors")
            break;
        default:
            alert("Please enter a number between 1-3");
            rockPaperOrScissors()
    }
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

function game() {
    let userScore = 0
    let comScore = 0
    for (let i = 0; i < 5; i++) {
        let currentRound = playRound();
        if (currentRound.startsWith("You won")) {
            userScore++
        }
            else if (currentRound.startsWith("You lose")) {
                comScore++
            }
        console.log(currentRound)
    }
    if (userScore - comScore > 0) {
        return ("You won the game!")
    }
        else if (comScore - userScore > 0) {
            return ("You lose the game :(")
        }
        else {
            return ("It's a draw!")
        }
}

console.log(game())