import { reset } from '../game-helpers/reset.js';

const test = QUnit.test;

test('#reset removes flipped classlist', async (expect) => {
    const card1 = document.createElement("div");
    card1.classList.add("flipped")
    const flipped = [card1]

    await reset(flipped)
    
    expect.equal(card1.classList.length, 0)
    expect.equal(flipped.length, 0)
})