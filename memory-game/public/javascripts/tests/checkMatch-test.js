import { checkMatch } from '../game-helpers/checkMatch.js';
const test = QUnit.test;


test('#matching removes cards from flipped if a match', (expect) => {
    //Arrange
    const card1 = document.createElement("div");
    card1.innerText = 1
    const card2 = document.createElement("div");
    card2.innerText = 1
    const flipped = [card1, card2]

    const cbStub = ()=>{}
    
    //Act 
    const actual = checkMatch(flipped, cbStub)

    //Expect
    expect.equal(flipped.length, 0);
});

test('#matching should call callback if not a match', (expect) => {
    //Arrange
    const card1 = document.createElement("div");
    card1.innerText = 1
    const card2 = document.createElement("div");
    card2.innerText = 2
    const flipped = [card1, card2]

    let spy = sinon.spy()
    
    //Act 
    const actual = checkMatch(flipped, spy)

    //Expect
    expect.equal(spy.callCount, 1);
    expect.ok(spy.calledWith(flipped));
});