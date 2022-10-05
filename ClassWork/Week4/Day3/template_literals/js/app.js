
const nameTextBox = document.getElementById("nameTextBox")
const submitButton = document.getElementById("submitButton")
const messageHeading = document.getElementById("messageHeading")

submitButton.addEventListener("click". function() {
    const year = 2022
    const name = nameTextBox.value
    const message = `Hello ${name}, Welcome to ${year} Cohort.`
})