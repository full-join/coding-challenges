export function generateValues(n){
    // n must be even -- todo raise an error
    if (n % 2 !== 0) return
    const values = [...Array(n/2).keys(), ...Array(n/2).keys()]
    const randomized = []
    while (values.length){
        const i = Math.floor(Math.random()*values.length)
        randomized.push(values.splice(i, 1))
    }
    return randomized
}