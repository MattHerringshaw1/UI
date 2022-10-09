let users = [
    {name: "Jay", age: 34}, 
    {name: "John", age: 20}, 
    {name: "Mary", age: 45}
  ]

let result = users.find(function(result) {
    return result.name ==="John"
})


console.log(result)