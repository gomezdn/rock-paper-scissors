function randomNumberInRange(min, max) {
    return (Math.floor(Math.random() * (max+1) + min))
}

function computerPlay() {
    return (["Rock", "Paper", "Scissors"][randomNumberInRange(0, 2)])
}

console.log(computerPlay())