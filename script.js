                /* PLAIN TEXT LOGIC ---> */

function randomNumberInRange(min, max) {
    return (Math.floor(Math.random() * (max+1) + min))
}

function computerPlay() {
    return (["Rock", "Paper", "Scissors"][randomNumberInRange(0, 2)])
}

function playRound(playerChoice) {
    let comChoice = computerPlay()
    console.log(`You chose ${playerChoice} and Computer chose ${comChoice}`)
    if (playerChoice === comChoice) {
        return ("It's a draw! You both chose the same element.")
    }
        else if (winnerElement(playerChoice, comChoice) === playerChoice) {
        return (`You won! ${playerChoice} beats ${comChoice}`)
    }
        else if (winnerElement(playerChoice, comChoice) === comChoice) {
        return (`You lost :( ${comChoice} beats ${playerChoice}`)
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
                /* PLAIN TEXT LOGIC */


                
                /* SCRIPT FOR THE INTERFACE ---> */



                /* Transitions for buttons*/
const choices = document.querySelectorAll(".choiceBtn");

choices.forEach(selection => selection.addEventListener("click", () => {
    selection.classList.add("choiceSelected")
}));

choices.forEach(selection => selection.addEventListener("transitionend", () => selection.classList.remove("choiceSelected")))


const ctrlBtn = document.querySelector(".controlBtn");

ctrlBtn.addEventListener("click", () => ctrlBtn.classList.add("newGame"));

ctrlBtn.addEventListener("transitionend", () => ctrlBtn.classList.remove("newGame"))
                /* Transitions for buttons */


                /* Game logic with interface */


let userScore = document.querySelector("#userScore")
let comScore = document.querySelector("#comScore")

console.log(typeof userScore.innerText)

choices.forEach(selection => selection.addEventListener("click", () => {
    const gameCourse = document.querySelector("#gameCourse");
    gameCourse.innerText = playRound(selection.value);
    if (gameCourse.innerText.startsWith("You won")) {
        userScore.innerText = Number(userScore.innerText) +1;
    }   else if (gameCourse.innerText.startsWith("You lost")) {
        comScore.innerText = Number(comScore.innerText) +1;
    }
    if (userScore.innerText == 5) {
        alert("Congrats! You won the game");
        userScore.innerText = 0;
        comScore.innerText = 0;
    } else if (comScore.innerText == 5) {
        alert("Ouch! You lost the game");
        userScore.innerText = 0;
        comScore.innerText = 0;
    }
}))

ctrlBtn.addEventListener("click", () => {
    userScore.innerText = 0;
    comScore.innerText = 0;
    gameCourse.innerText = "-";
})






                /* Game logic with interface */