// Polynomial - O(n^c)
// n is the size of the input
// c is some constant
// includes O(n^2) quadratic, O(n^3) Cubic, etc.

// quadratic O(n^2)
// *
const foo = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i] + "/" + array[j])
        }
    }
}
// foo(["lille", "water", "food"])

// **
const fun = (str) => {
    if(str.length === 0) return

    const firChar = str[0]
    const rest = str.slice(1)
    console.log(firChar)
    fun(rest)
}
fun("coderbyte")


// Cubic O(n^3)

const bar = (n) => {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let q = 0; q < n; q++) {
                console.log(i, j, q)
            }
        }
    }
}
// bar(2)
