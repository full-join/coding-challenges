{
  /* <i class="fas fa-hotdog"></i>
<i class="fas fa-ice-cream"></i> */
}
class Card {
  faImages = [
    "fas fa-dog",
    "fas fa-cat",
    "fas fa-hotdog",
    "fas fa-hamburger",
    "fas fa-dove",
    "fas fa-hat-wizard",
    "fas fa-ghost",
    "fas fa-pizza-slice",
    "fab fa-earlybirds",
    "fas fa-grin-squint-tears",
    "fas fa-ice-cream",
  ];

  constructor(element) {
    this.element = element;
    this.flipped = false;
    this._value = 0;
    this.id;
  }

  set value(val) {
    // assign the value and get the element for that value's card back
    this._value = val;
    let backEl = this.element.getElementsByClassName("flip-card-back")[0];

    // create the contents for that element
    let content = document.createElement("i");
    content.classList.add(...this.faImages[val].split(" "));

    // clear out the old content and put in the new content
    backEl.innerHTML = null;
    backEl.appendChild(content);
  }

  get value() {
    return this._value;
  }

  flip() {
    this.element.classList.add("flipped");
    this.flipped = true;
  }

  unflip() {
    this.element.classList.remove("flipped");
    this.flipped = false;
  }
}

class Game {
  constructor() {
    this.turnNumber = 0;
    this.cards = [];
    this.cardpair = [];
    this.running = false;
    this.endTurnTimeout = 1000;
    this.endOfTurn = false;
    this.endGameAnimation = this.allFlipAnimation;

    document.querySelectorAll(".square").forEach((item) => {
      let card = new Card(item);
      card.id = this.cards.length;
      this.cards.push(card);
      this.cards;
      item.addEventListener("click", onSquareClick);
    });
    this.assignNumbersToCards();
  }

  get allCardsFlipped() {
    let flipped = true;
    this.cards.forEach((card) => {
      flipped = flipped && card.flipped;
    });
    return flipped;
  }

  start() {
    console.log("Game is running.  Good Luck!");
    this.unflipAllCards();
    this.running = true;
  }

  turnAttempt(cardId) {
    let card = this.cards[cardId];

    if (card.flipped) {
      console.log("Cards already been flipped");
      return;
    }

    if (this.endOfTurn) {
      console.log("Slow down, the next turn hasn't started yet.");
      return;
    }

    if (!this.running) {
      console.log("Game's not running yet.");
      return;
    }

    this.cardpair.push(card);
    card.flip();

    if (this.cardpair.length == 2) {
      this.endOfTurn = true;
      let cards = this.cardpair;
      let match = cards[0].value == cards[1].value;
      console.log(match ? "You got a pair!" : "Sorry, try again");

      if (!match) {
        setTimeout(() => {
          console.log(`Unflipping cards`, cards[0].id, "and", cards[1].id);
          for (let card of cards) {
            card.unflip();
            this.endOfTurn = false;
          }
        }, this.endTurnTimeout);
      } else {
        this.endOfTurn = false;
      }

      this.cardpair = [];
      this.turnNumber++;
      console.log(this.turnNumber);
      if (game.allCardsFlipped) {
        let titleEl = document.getElementById("title");
        titleEl.innerText = `You did it! Only took you ${this.turnNumber} tries!`;
        this.endGameAnimation();
      }
    }
  }

  /** Assign random number pairs to all the cards in this.cards */
  assignNumbersToCards() {
    let numberOfCards = this.cards.length;
    let numbers = [];

    for (let i = 0; i < numberOfCards / 2; i++) {
      numbers.push(i, i);
    }

    for (let i = 0; i < numberOfCards; i++) {
      //splice a random number out of the numbers array
      let n = randomInt(0, numbers.length - 1);
      let number = numbers.splice(n, 1)[0];
      //push that number into the card[i].value;
      this.cards[i].value = number;
    }
  }

  flipAllCards() {
    for (let card of this.cards) {
      card.flip();
    }
  }

  unflipAllCards() {
    for (let card of this.cards) {
      card.unflip();
    }
  }

  allFlipAnimation() {
    let i = 0;
    this.ani = setInterval(() => {
      i % 2 == 0 ? this.unflipAllCards() : this.flipAllCards();
      i++;
    }, 500);
  }

  cycleFlipAnimation() {
    let i = 0;
    this.ani = setInterval(() => {
      if (i >= this.cards.length) i = 0;
      this.cards[i].flipped ? this.cards[i].unflip() : this.cards[i].flip();
      i++;
    }, 50);
  }
}

let game = new Game();
game.endGameAnimation = game.cycleFlipAnimation;

window.addEventListener("DOMContentLoaded", () => {
  game.flipAllCards();
  setTimeout(() => {
    game.start();
  }, 2000);
});

function onSquareClick(e) {
  let square = e.target.parentElement.parentElement;
  let squareNumber = square.id;
  game.turnAttempt(squareNumber);
}

/////Helper Functions////

/** Returns a random integer between and up to start and end values */
function randomInt(start, end) {
  return Math.floor(Math.random() * (end + 1) + start);
}
