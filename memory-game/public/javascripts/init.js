import Game from './classes/game.js'
import Card from './classes/card.js'
import { generateValues } from './game-utils/generateValues.js'

window.addEventListener('DOMContentLoaded', ()=>{
    let game = new Game()
    let values = generateValues(20)
    let board = []
    let boardDom = document.getElementById('board')
    values.forEach((v, indx) => {
        const card = new Card(v, indx)
        boardDom.appendChild(card.domElement)
        board.push(card)
        card.domElement.addEventListener("click", (e)=>{
            console.log(e.currentTarget)
            game.addToCurrent(e.currentTarget.id)
        })
    })
    game.board = board
});
