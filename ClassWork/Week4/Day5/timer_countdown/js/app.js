// count up timer
// const counterHeading = document.getElementById("counterHeading")

// let counter = 0

// const intervalID = window.setInterval(function() {
//     counter ++
//     counterHeading.innerHTML = counter
// }, 1000)




const counterHeading = document.getElementById('counterHeading')
startButton.addEventListener("click", startClick)

let counter = 10
function startClick () {
    const intervalId = window.setInterval(function() {
        counter--
        if(counter === 0){
            clearInterval(intervalId);
        }
        counterHeading.innerHTML = counter
    }, 1000)
}
