
// const menuUL = document.getElementById("menuUL")

// for(let index = 0; index < dishes.length; index++) {
//     const food = dishes[index]
//     const foodItem = `
//         <li class="parent">
//             <h2>${food.title}</h2>
//             <h4 class="info">${food.description}</h4>
//             <label>${food.price}</label>
//             <img class="img" src="${food.imageURL}"/>
//         </li>
//     `
//     menuUL.insertAdjacentHTML("beforeend", foodItem)
// }


const dishesUL = document.getElementById("dishesUL")

const startersButton = document.getElementById("startersButton")
startersButton.addEventListener("click", function() {


    const filteredDishes = dishes.filter(function(dish) {
        return dish.course == "Starters"  
    })

    const dishItems = filteredDishes.map(function(dish) {
        return  `
            <li class = "dish-item">
                <img src = ${dish.imageURL} />
                <h1>${dish.title}</h1>
                <h3>${dish.description}</h3>
            </li>
                `
    }) 
    
    dishesUL.innerHTML = dishItems.join("")

})


const entreesButton = document.getElementById("entreesButton")
entreesButton.addEventListener("click", function() {

    const filteredDishes = dishes.filter(function(dish) {
        return dish.course == "Entrees"  
    })

    const dishItems = filteredDishes.map(function(dish) {
        return  `
            <li class = "dish-item">
                <img src = ${dish.imageURL} />
                <h1>${dish.title}</h1>
                <h3>${dish.description}</h3>
            </li>
                `
    }) 
    
    dishesUL.innerHTML = dishItems.join("")

})



const dessertsButton = document.getElementById("dessertsButton")
dessertsButton.addEventListener("click", function() {

    const filteredDishes = dishes.filter(function(dish) {
        return dish.course == "Desserts"
    })
    
    const dishItems = filteredDishes.map(function(dish) {
        return  `
            <li class = "dish-item">
                <img src = ${dish.imageURL} />
                <h1>${dish.title}</h1>
                <h3>${dish.description}</h3>
            </li>
                `
    })

    dishesUL.innerHTML = dishItems.join("")
})



const dishItems = dishes.map(function(dish) {
    return  `
        <li class = "dish-item">
            <img src = ${dish.imageURL} />
            <h1>${dish.title}</h1>
            <h3>${dish.description}</h3>
        </li>
            `
        
})


const allButton = document.getElementById("allButton")
allButton.addEventListener("click", function() {
    // const filteredDishes = dishes.filter(function(dish) {
    //     return dish.course == "'Starters' && 'Entrees' && 'Desserts'"
    // })

    const dishItems = dishes.map(function(dish) {
        return  `
            <li class = 'dish-item'>
                <img src = ${dish.imageURL} />
                <h1>${dish.title}</h1>
                <h3>${dish.description}</h3>
            </li>
                `
        
    })
    dishesUL.innerHTML = dishItems.join("")
    
})


dishesUL.innerHTML = dishItems.join("")

// dishesUL.innerHTML = dishItems.join("")  //puts text on screen