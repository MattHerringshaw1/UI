
// https://dog.ceo/api/breeds/image/random

const photoId = document.getElementById("photoId")
const newImgBtn = document.getElementById("newImgBtn")
// newImgBtn.addEventListener("click", function() {

//     const url = "https://dog.ceo/api/breeds/image/random"
//     let request = new XMLHttpRequest()
//     request.addEventListener("load", function() {
//         const result = JSON.parse(this.responseText)

//         console.log(result.message)

//         photoId.innerHTML = result.message
//         photoId.setAttribute("src", result.message)

//     })

//     request.open("GET", url)
//     request.send()
// })




newImgBtn.addEventListener("click", function () {
    async function getImage() {
        try {
            let url = "https://dog.ceo/api/breeds/image/random"
            let response = await fetch(url)
            let image = await response.json()
            
            // console.log(image.message)
    
            photoId.innerHTML = image.message
            photoId.setAttribute("src", image.message)
    
        } catch {
            console.log(error)
        }
    
    }
    getImage()
})
