
function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 == 0) {
        console.log("Fizz Buzz")
    }
    else if (number % 3 == 0) {
        console.log("Fizz")
    }
    else if (number % 5 == 0) { 
        console.log("Buzz")
    }
    else {
        console.log("Null")
    }
}

fizzBuzz(9)
fizzBuzz(15)
fizzBuzz(10)
fizzBuzz(22.3)

// number = int(input("Enter a number: "))
// if (number % 3) ==0 and (number % 5) == 0:
//     print("Fizz Buzz")
// elif (number % 3) == 0:
//     print("Fizz")
// elif (number % 5) == 0:
//     print("Buzz")
