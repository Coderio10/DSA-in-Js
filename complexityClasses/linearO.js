// linearO(n)

let foo = (array) => {
    for(const element of array) {
        console.log(element)
    }
}

// foo(['wet', 'mat', 'cat', 'rat', 'doq'])

let bar = (n) => {
    if (n === 0) return
    console.log(n)
    bar(n - 1)
}

// bar(5)