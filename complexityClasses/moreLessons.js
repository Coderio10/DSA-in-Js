// analyzing multi-argument functions

// *
let foo = (m, n ) => {
    for(let i = 0; i < m; i++) {
        console.log("hi")
    }

    for(let j = 0; j < n; j++) {
        console.log("bye")
    }
}

foo(3, 2)
// time complexity: O(m + n)

// **
const crossPairs = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            console.log(arr1[i] + arr2[j])
        }   
    }
}

let colors = ["yellow","red", "white", "blue"]
let food = ["bread", "garri", "beans", "potato"]

crossPairs(colors, food)
// time complexity: O(m * n)

// *
let foo2 = (q, r ) => {
    if (q > r) {
        for(let i = 0; i < q.length; i++) {
            console.log(q[i])
        }    
    } else {
        for(let j = 0; j < r.length; j++) {
            console.log(r[j])
        }
    }
}

foo2("swim", "run")
// time complexity: O(max(q, r))
// time complexity: O(n), n => length of the longer string
