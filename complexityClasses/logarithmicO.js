// logarithmic functions => O(log(n)): the number of steps can be expressed as a logarithm on the input size

// what is a log ?
// a log is the opposite of an exponent
// an exponent is a repeated multiplication, a log is a repeated division

// *
const fun = (n) => {
    while (n > 1) {
        console.log(n)
        n /= 2
    }
    console.log('done')
}
// the time complexity => log64(n) => log(n)
fun(64)

// **
const foo = (n) => {
    if (n <= 1) {
        console.log("hooray")
        return
    }
    console.log(n)
    foo(n / 2)
}
foo(64)
