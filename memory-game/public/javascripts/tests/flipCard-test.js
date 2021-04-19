import { flipCard } from '../game-helpers/flipCard.js';

const test = QUnit.test;

test('#flipCard adds a flipped class to card', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const card = document.createElement("div");
    const flipped = []
    const expected = '<div class="flipped"></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = flipCard(card, flipped)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('#flipCard adds card to flipped array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const card = document.createElement("div");
    const flipped = []
    
    //Act 
    // Call the function you're testing and set the result to a const
    flipCard(card, flipped)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(flipped[0], card);
});

test('#flipCard does nothing if flipped already has 2 elements', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const card = document.createElement("div");
    const flipped = [1, 2]
    
    //Act 
    // Call the function you're testing and set the result to a const
    flipCard(card, flipped)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(flipped, [1,2]);
});

test('#flipCard does nothing if card already has flipped class', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const card = document.createElement("div");
    card.classList.add("flipped")
    const flipped = []
    
    //Act 
    // Call the function you're testing and set the result to a const
    flipCard(card, flipped)

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(flipped, []);
});