// FACTORIAL O(n!)
let bar = (n) => {
    if (n === 1) return

    for (let i = 0; i < n; i++) {
        bar(n - 1)
        
    }
}

bar(4)