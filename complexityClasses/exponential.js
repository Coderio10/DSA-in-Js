// EXPONENTIAL - O(C^n)
// n => size of the input
// c => constant  
// includes O(2^n), O(3^n) etc. 

// O(2^n)
let bar = (n) => {
    if (n === 1) return
    bar(n - 1)
    bar(n - 1)
}

bar(4)

// O(3^n)
let bar2 = (n) => {
    if (n === 1) return
    bar(n - 1)
    bar(n - 1)
}

bar2(4)