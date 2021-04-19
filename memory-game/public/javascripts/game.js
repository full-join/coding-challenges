import {flipCard} from './game-helpers/flipCard.js';
import {checkMatch} from './game-helpers/checkMatch.js';
import {reset} from './game-helpers/reset.js';

const resetGame = () => {
    const tiles = Array.from(document.querySelectorAll('.flip-card-back'))
    const values = [...Array(10).keys(), ...Array(10).keys()]
    while (values.length){
        const i = Math.floor(Math.random()*tiles.length)
        const tile = tiles[i]
        tile.textContent = values.pop()
        tiles.splice(i, 1)
    }
}

const checkWin = ()=>{
    const flippedCards = document.querySelectorAll('.flipped')
    if(flippedCards.length === 20){
        const winnerText = document.getElementById("winner")
        winnerText.textContent = "YAY! You did it!"
    }
}

window.addEventListener('DOMContentLoaded', ()=>{
    let flipped = []
    resetGame()
    const cards = document.querySelectorAll('.flip-card')
    cards.forEach(c => c.addEventListener("click", e => {
        flipCard(e.currentTarget, flipped)
        checkMatch(flipped, reset)
        checkWin()
    }))
});
