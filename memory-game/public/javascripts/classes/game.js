import Card from "./card.js"

export default class Game {
    constructor(board){
        this.board = board
        this.current = []
    }

    addToCurrent(indx){
        if (this.current.length === 2 || indx >= this.board.length) return
        let card = this.board[indx]
        this.current.push(card)
        this.checkMatch()
    }

    checkMatch(){
        if(this.current.length !== 2) return false
        if(Card.isMatch(this.current)) {
            return true
        } else {
            setTimeout(()=>{
                this.current.map(c => c.reset())
                this.current = []
            }, 1000)
        }
    }

    checkforWin(){
        const flippedCards = this.board.filter(c => c.flipped)
        if(flippedCards.length === 20){
            const winnerText = document.getElementById("winner")
            winnerText.textContent = "YAY! You did it!"
            setTimeout(()=>{
                this.reset()
                winnerText.textContent = ""
            }, 1000)
        }
    }
}