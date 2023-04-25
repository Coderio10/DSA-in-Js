const slowSum = (array) => {
    if (array.length === 0) return 0
    const rest = array.slice(1)
    return  array[0] + slowSum(rest)
}

// console.log(slowSum([1, 3, 4, 6]))
// time: O(n*n) = O(n^2)
// Space: O(n)

// optimization of the function above
const fastSum = (array) => {
    return _fastSum(array, 0)
}  

const _fastSum = (array, idx) => {
    if( idx === array.length) return 0
    return array[idx] + _fastSum(array, idx + 1)
}

// console.log(fastSum([1, 3, 4, 6]))
// time: O(n)


// expiriment
const input = new Array(8000).fill(1)

const slowStart = Date.now()
// console.log(slowSum(input))
const slowEnd = Date.now()
// console.log(`n^2 finished in ${slowEnd - slowStart}ms`)

const fastStart = Date.now()
// console.log(fastSum(input))
const fastEnd = Date.now()
// console.log(`n finished in ${fastEnd - fastStart}ms`)
 

// fibonacci sequence or Multi-branch recurssion

const fib = (n) => {
    if (n === 1 || n === 2) return 1
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(6))

// time: O(2^n)
// Space: O(n)
