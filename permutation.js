// a collection of things where the order matters

const permutation = (elements) => {
    if (elements.length === 0) return [ [] ]

    const firstEl = elements[0]
    const rest = elements.slice(1)
    
    const permsWithoutFirst = permutation(rest)
    const allPermutation = []
    permsWithoutFirst.forEach(perm => {
        for(let i = 0; i <= perm.length; i++) {
            const permsWithFirst = [...perm.slice(0, i), firstEl, ...perm.slice(i)]
            allPermutation.push(permsWithFirst)
        }
    })

    return allPermutation
}
// time: O(n!)
// space:  O(n^2)

console.log(permutation(['a', 'b', 'c'])) 