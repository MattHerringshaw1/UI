
let word = "moan"

function isPalindrome(word) {
    let reverse = ""
    for(let index = word.length - 1; index >=0 ; index--) {
        reverse += word[index]
    }
    if (reverse === word) {
        console.log("Palindrome")
    }
    else {
        console.log("Not Palindrome")
    }
    
}

isPalindrome(word)
