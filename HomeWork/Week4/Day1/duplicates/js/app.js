
const names = ["John","Mary", "Alex", "Steve", "Mary", "John"] 
// console.log(names)
let duplicateFreeNames = []

for(let index = 0; index < names.length; index++) {
    const name = names[index]
    if(!duplicateFreeNames.includes(name)) {
        duplicateFreeNames.push(name)
    }
}

console.log(duplicateFreeNames)