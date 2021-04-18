class Card {
  constructor(element) {
    this.element = element;
    this.flipped = false;
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

let cards = [];

window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".square").forEach((item) => {
    // console.log(item)
    cards.push(new Card(item));

    item.addEventListener("click", (e) => {
      // handle the click event
      let square = e.target.parentElement.parentElement;
      let squareNumber = square.id;
      let card = cards[squareNumber];
      if (!card.flipped) {
        card.flip();
      } else {
        card.unflip();
      }
      console.log(`Square ${squareNumber} clicked`);
    });
  });
});
