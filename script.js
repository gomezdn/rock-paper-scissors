const choices = document.querySelectorAll(".choiceBtn")

choices.forEach(selection => selection.addEventListener("click", () => {
    selection.classList.add("selected")
}))

function removeTransition() {
    this.classList.remove("selected");
}

choices.forEach(selection => selection.addEventListener("transitionend", removeTransition))

const ctrlBtn = document.querySelector("#controlBtn");
ctrlBtn.addEventListener("click", () => {
    ctrlBtn.classList.add("selected");
})

ctrlBtn.addEventListener("transitionend", removeTransition)
