
function isVowel(letter) {
    if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return true
    }  
    return false
}

console.log(isVowel("i")) 





// thru a loop //
function isVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u", "y"]
    let isVowel = false

    for(let index = 0; index < vowels.length; index++) {
        if(letter == vowels[index]) {
            isVowel = true 
            break 
        }
    }

    return isVowel
}

console.log(isVowel("u")) 
