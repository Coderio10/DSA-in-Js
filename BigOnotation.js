// TIME COMPLEXITY

// the big O notation of this function is => O(x * n) 
// n => length of the input array 
// x => number of codes that runs more than one time
const calAve = (numbers) => {
    // this runs only once
    let sum = 0

    for(const number of numbers) {
        // this runs 4 times because of the input 
        sum += number
    }
    // this runs only once
    return sum / numbers.length
}

console.log(calAve([1, 2, 3, 4]))

// the big O notation of this function is => O(4 * n)

// simplifying big O notation we use the "PRODUCT RULE": drop the constant terms.  
// from what we analysized from above O(4 * n)
// since we know 4 is a constant so we drop it making it => O(n)

// SUM RULE: choose the single biggest term  
// O(n + 1000) => O(n) n is bigger because n varies and it value can be above 1000
// O(n^2 + n) => O(n^2)
// O(n^2 + 500 + n^3 + n) => O(n^3)

// full simplification
// O((n/3)^6 + 10n) => O((1/3 * n)^6 + 10n) => O(n^6 + n) => O(n^6)

// SPACE COMPLEXITY: space complexity is typically referring to any extra space that a solution may use not including the space comsumed by the input  
const calAve2 = (numbers) => {
    // this variable is initialized once
    let sum = 0

    // number variable is initialized once 
    for(const number of numbers) {
        // this runs 4 times because of the input 
        sum += number
    }
    return sum / numbers.length 

}
// so the space complexity of this function => O(2) (since we have two variables) => O(1)

console.log(calAve2([2, 3, 4, 1]))

// EXAMPLE 2

// A function to check if an element exist in an array and prevent it from storing into the array 
// solution 1
const uniArr = (array) => {
    const newArr = []

    // runs 8 times since there are 8 inputs  
    for(const ele of array) {
        // runs 8 times since there are 8 inputs
        if (!newArr.includes(ele)) {
            newArr.push(ele)            
        }
    } 
    return newArr
}

console.log(uniArr([1, 3, 4, 6, 4, 5, 1, 3]))
// TIME COMPLEXITY => O(8n * 8n) => O(64n^2) => O(n^2)
// O(n) => Space Complexity, where n => input  

// solution 2
// a set automatically makes sure its elements are unique
const uniArr2 = (array) => {
    const unique = new Set()

    // runs 8 times since there are 8 inputs  
    for(const ele of array) {
        unique.add(ele)            
    } 
    return unique
}

console.log(uniArr([1, 3, 4, 6, 4, 5, 1, 3]))
// TIME COMPLEXITY => O(8n)  => O(n)
// O(n) => Space Complexity, where n => input  

// judging from the time complexity of solution 1 & 2, solution was a better solution because it has the time complexity of O(n)  