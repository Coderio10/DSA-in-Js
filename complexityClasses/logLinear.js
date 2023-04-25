// LogLinear O(n*log(n))
// has linear behaviour nested in log steps
// Bigger than O(n) but smaller than O(n^2)

// *
let strx = 'Hello world'
strx.slice(1, 7) // ello w

const bar = (str) => {
    console.log(str)
    if (str.length <= 1) return
    const midIdx = Math.floor(str.length / 2)
    bar(str.slice(0, midIdx))
}

// bar("abcdefghijklmnopqrstuvwxyz")
// abcdefghijklmnopqrstuvwxyz
// abcdefghijklm
// abcdef
// abc
// a

// **

const foo = (array) => {
    let stg = ""
    for (const element of array ) {
        stg += element
    } 

    console.log(stg)
    console.log("--------")

    if (array.length <= 1) return
    const midNo = Math.floor(array.length / 2)
    const left = array.slice(0, midNo)
    const right = array.slice(midNo)    

    // foo(left)
    foo(right)

}

foo(["a", "b", "c", "d", "e", "f", "g", "h"])
// abcdefgh
// --------
// abcd
// --------
// ab
// --------
// a
// --------
// efgh
// --------
// gh
// --------
// h
// --------