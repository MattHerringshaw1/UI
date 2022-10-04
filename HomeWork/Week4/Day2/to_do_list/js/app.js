
const toDoTextBox = document.getElementById("toDoTextBox")
const btnAddTask = document.getElementById("btnAddTask")
const taskPending = document.getElementById("taskPending")
const taskCompleted = document.getElementById("taskCompleted")

function erase() {
    if(document.getElementById("toDoTextBox").value==="") {
        document.getElementById("btnAddTask").disabled = true
    } else{
        document.getElementById("btnAddTask").disabled = false
    }
}

btnAddTask.addEventListener("click", function() {
    
    const toDoTitle = toDoTextBox.value
    let li = document.createElement("li")

    //checkbox
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    checkBox.id = "checkbox"



    li.appendChild(checkBox)

    checkBox.addEventListener("change", function() {
        if(this.checked){
            taskCompleted.appendChild(li)}
        else{
        taskPending.appendChild(li)
            } 
    })
    
    //adding task to pending
    let toDoTextLabel = document.createElement("label")
    toDoTextLabel.innerHTML = toDoTitle
    li.appendChild(toDoTextLabel)


    //remove button
    let btnRemoveTask = document.createElement("button")
    btnRemoveTask.className = "removeButton"
    btnRemoveTask.addEventListener("click", function() {
        btnRemoveTask.parentElement.remove()
    })

    btnRemoveTask.innerHTML = "Remove"
    li.appendChild(btnRemoveTask)
    taskPending.appendChild(li)
})  