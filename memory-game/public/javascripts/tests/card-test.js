import Card  from '../classes/card.js';
const test = QUnit.test;



test('it should have a value, a flipped boolean and a DOM element', expect => {
    const card = new Card(4, 2)
    const expectedDOM = '<div class="flip-card" id="2"><div class="flip-card-inner"><div class="flip-card-front"></div><div class="flip-card-back bg-yellow-400 text-5xl">4</div></div></div>'
    expect.equal(card.value, 4)
    expect.equal(card.flipped, false)
    expect.equal(card.domElement.outerHTML, expectedDOM)

})

test('Card#isMatch should return true if cards are a match', expect => {
    const card1 = new Card(4)
    const card2 = new Card(4)

    expect.equal(Card.isMatch([card1, card2]), true)
})

test('Card#isMatch should return false if cards are not a match', expect => {
    const card1 = new Card(4)
    const card2 = new Card(5)

    expect.equal(Card.isMatch([card1, card2]), false)
})
test('#flip should set flipped to true', expect => {
    const card = new Card(4)
    
    card.flip()

    expect.equal(card.flipped, true)
    expect.equal(card.domElement.classList.contains("flipped"), true)
})

test('#flip should return if card already flipped', expect => {
    const card = new Card(4)
    card.domElement.classList.add("flipped")
    card.flipped = true
    
    card.flip()

    expect.equal(card.flipped, true)
    expect.equal(card.domElement.classList.contains("flipped"), true)
})

test('#reset should set flipped to false', expect => {
    const card = new Card(4)
    card.flipped = true
    card.domElement.classList.add("flipped")
    
    card.reset()

    expect.equal(card.flipped, false)
    expect.equal(card.domElement.classList.contains("flipped"), false)
})

test('#reset should return if card already reset', expect => {
    const card = new Card(4)
    
    card.reset()

    expect.equal(card.flipped, false)
    expect.equal(card.domElement.classList.contains("flipped"), false)
})



// test()