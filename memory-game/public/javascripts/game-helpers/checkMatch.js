export const checkMatch = (flipped, resetCB) => {
    if (flipped.length === 2) {
        if(flipped[0].innerText === flipped[1].innerText) {
            flipped.length = 0
        } else {
            resetCB(flipped)
        }
    }

}