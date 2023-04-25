// Analyzing STACKS space for recursion
// the space required on the call stack is the maximum stack depth 

let bar = (n) => {
    if (n === 1) return
    bar(n - 1)
    bar(n - 1)
}

bar(4)
// time complexity = O(2^n)
// space complexity = O(n)
