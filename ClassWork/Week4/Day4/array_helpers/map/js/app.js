const numbers = [1,2,3,4,5,6,7,8]
let doubleNumbers = [] 

// for(let index = 0; index < numbers.length; index++) {
//     const number = numbers[index]
//     const result = number * 2 
//     doubleNumbers.push(result)
// }

let result = numbers.map(function(n) {
    
    return n * 2 
})

console.log(result)