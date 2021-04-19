import Game  from '../classes/game.js';
const test = QUnit.test;


test('#addToCurrent should add card to current', expect => {
    let card1 = { value: 1 }
    let card2 = { value: 2 }
    let game = new Game([card1, card2])

    game.addToCurrent(1)

    expect.equal(game.current[0].value, 2)
})

test('#addToCurrent should return if current full', expect => {
    let card1 = { value: 1 }
    let card2 = { value: 2 }
    let card3 = { value: 3 }
    let game = new Game([card1, card2, card3])
    game.current = [card1, card2]

    game.addToCurrent(2)

    expect.equal(game.current.length, 2)
})

test('#addToCurrent should return if indx out of range', expect => {
    let card1 = { value: 1 }
    let card2 = { value: 2 }
    let game = new Game([card1, card2])

    game.addToCurrent(3)

    expect.equal(game.current.length, 0)
})