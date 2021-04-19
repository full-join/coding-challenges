import Card  from '../classes/card.js';
const test = QUnit.test;


test('it should have a value and a flipped boolean', expect => {
    const card = new Card(4)

    expect.equal(card.value, 4)
    expect.equal(card.flipped, false)

})

test('#flip should toggle flipped value', expect => {
    const elem = document.createElement("div")
    const card = new Card(4, elem)
    
    card.flip()

    expect.equal(card.flipped, true)
    expect.equal(elem.classList.contains("flipped"), true)
})