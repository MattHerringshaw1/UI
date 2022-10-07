
const counterHeading = document.getElementById("counterHeading")

let counter = 0

const intervalID = window.setInterval(function() {
    counter ++
    counterHeading.innerHTML = counter
}, 1000)



