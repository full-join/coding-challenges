class Card {
  constructor(element) {
    this.element = element;
    this.flipped = false;
    this._value = 0;
    this.id;
  }

  set value(val) {
    this._value = val;
    let backEl = this.element.getElementsByClassName("flip-card-back")[0];
    backEl.innerText = String(val);
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
    this.turnNumber;
    this.cards = [];
    this.cardpair = [];
    this.running = false;
    this.endTurnTimeout = 2000;

    document.querySelectorAll(".square").forEach((item) => {
      let card = new Card(item);
      card.id = this.cards.length;
      this.cards.push(card);
      this.cards;
      item.addEventListener("click", onSquareClick);
    });
    this.assignNumbersToCards();
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

    if (!this.running) {
      console.log("Game's not running yet.");
      return;
    }

    this.cardpair.push(card);
    card.flip();

    if (this.cardpair.length == 2) {
      let cards = this.cardpair;
      let match = cards[0].value == cards[1].value;
      console.log(match ? "You got a pair!" : "Sorry, try again");

      if (!match) {
        setTimeout(() => {
          console.log(`Unflipping cards`, cards[0].id, "and", cards[1].id);
          for (let card of cards) {
            card.unflip();
          }
        }, this.endTurnTimeout);
      }

      this.cardpair = [];
      this.turnNumber++;
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
}

let game = new Game();

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
