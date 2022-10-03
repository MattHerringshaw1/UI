
function sortAscending(array) {
    array.sort(function(a,b){return a-b})
    
}

function sortDescending(array) {
    array.sort(function(a,b){return b-a})
    
}

let arrayA = [3,4,56,7,8,1]
sortAscending(arrayA)
console.log(arrayA)

sortDescending(arrayA)
console.log(arrayA)
