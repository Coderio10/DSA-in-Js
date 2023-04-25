// STACKS
// first in, last out, and vise versa

// Functions: push, pop, peek, length
// push: for placing data unto a stack
// pop:  for removing the top element of a stack
// peek: for displaying the top element of a stack
// length: for determining how many elements are in a stacks 

// Note: Arrays have all the functions of a stack

var letters = [] // this is our stack
var words = "coderio"
var rword = ""

// put letters of word into stacks
for (const word of words) {
    letters.push(word)
}
console.log(letters)

// pop off the stack in reverse order
for (const word of words) {
    rword += letters.pop()
}

if (rword === words) {
    console.log(words + " is a palindrome.")
} else {
    console.log(words + " is not a palindrome.")
}

console.log(letters)
console.log(rword)



