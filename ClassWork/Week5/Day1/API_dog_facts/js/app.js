const dogsUL = document.getElementById("dogsUL")


let request = new XMLHttpRequest() 


request.addEventListener("load", function() {
    console.log(this.responseText)

    const dogFacts = JSON.parse(this.responseText)
    
    console.log(dogFacts)
   


    const dogFactItems = dogFacts.map(function(dogFact) {
        return  `
        <li>
            <label>${dogFact.fact}</label>
        </li>
                `
    })

    dogsUL.innerHTML = dogFactItems.join("")

    

})

request.open("GET", "https://island-bramble.glitch.me/dog-facts" )

request.send() 