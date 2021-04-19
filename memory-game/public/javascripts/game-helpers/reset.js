export const reset = flipped => {
    return new Promise(resolve => {
        setTimeout(()=>{
            flipped.map(c => c.classList.toggle("flipped"))
            flipped.length = 0
            resolve()
        }, 1000)
    })
}