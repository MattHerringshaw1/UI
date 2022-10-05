
const namesUL = document.getElementById("namesUL")
const names = ["Alex", "John", "Mary", "Steven"]

for(let index = 0; index < names.length; index++) {
    const name = names[index]
    const nameItem = `
        <li>
            <input type = "radio" name = "radio"/>
            <label>${name}</label>
            <button>Remove</button>
        </li>
    `
    
    namesUL.insertAdjacentHTML("beforeend", nameItem)
}

