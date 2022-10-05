
const menuUL = document.getElementById("menuUL")

for(let index = 0; index < dishes.length; index++) {
    const food = dishes[index]
    const foodItem = `
        <li class="parent">
            <h2>${food.title}</h2>
            <h4 class="info">${food.description}</h4>
            <label>${food.price}</label>
            <img class="img" src="${food.imageURL}"/>
        </li>
    `
    menuUL.insertAdjacentHTML("beforeend", foodItem)
}



