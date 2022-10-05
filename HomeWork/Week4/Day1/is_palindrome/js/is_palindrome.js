
let test = "mom"

function isPalindrome(word) {
    let reverse = ""
    for(let index = word.length - 1; index ; index--) {
        reverse += word[index]
    }
    if (reverse === word) {
        console.log("Palindrome")
    }
    else {
        console.log("Not Palindrome")
    }
}



// isPalindrome(test)


// def is_palindrome(str):
// reversed_word = ""
// for index in range(len(str) - 1, -1, -1):
//     reversed_word += str[index]

// if reversed_word.lower() == str.lower():
//     return True
// else:
//     return False


// str = input("Enter a word here: ")
// if is_palindrome(str):
// print("Palindrome")
// else:
// print("Not Palindrome")
