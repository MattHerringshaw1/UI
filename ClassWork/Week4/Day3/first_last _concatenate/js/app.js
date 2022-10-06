
const nameTextBox1 = document.getElementById("nameTextBox1")
const nameTextBox2 = document.getElementById("nameTextBox2")
const submitButton = document.getElementById("submitButton")
const messageHeading = document.getElementById("messageHeading")

submitButton.addEventListener("click", function() {

    
    const firstName = nameTextBox1.value
    const lastName = nameTextBox2.value

    const message = `Hello ${lastName}, ${firstName}.`

    messageHeading.innerHTML = message 


})
