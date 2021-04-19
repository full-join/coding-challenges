export const flipCard = (card, flipped) => {
    if (flipped.length === 2 || card.classList.contains("flipped")) return;
    
    if (flipped.length < 2){
        card.classList.toggle("flipped")
        flipped.push(card)
    }
    return card;
}