// Combination is a collection of items where the order does not matter
// Given a set of n things, there are 2^n possible combinations
  
const combinations = (elements) => {
    if (elements.length === 0) return [ [] ]

    const firstEl = elements[0]
    const rest = elements.slice(1)

    const combsWithoutFirst = combinations(rest)
    const combswithfirst = []

    combsWithoutFirst.forEach(comb => {
       const combwithfirst =  [...comb, firstEl]
       combswithfirst.push(combwithfirst)
    })

    return [...combsWithoutFirst, ...combswithfirst]

}

console.log(combinations(["a", "b", "c"])) 