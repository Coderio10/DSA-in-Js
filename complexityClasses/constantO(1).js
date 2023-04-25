// there are 7 complexity classes:
// Constact - O(1): the num of steps does not depend on the input size

// *
const foo = (n) => {
    let result = 0

    // this runs 5 times => O(5) = O(1)
    for (let i = 0; i < 5; i++) {
        // this runs 5 times => O(5) = O(1)
        result += n
    } 

    return result
}
console.log(foo(4)) // 20

// **
const bar = (array) => {
    return array[0] * array[array.length - 1]
}
console.log(bar([1, 3, 5, 6, 7])) // 7
