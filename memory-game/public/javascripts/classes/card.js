export default class Card {
    constructor(value, domElem){
        this.value = value
        // TODO: generate this DOM element automatically
        this.domElem = domElem
        this.flipped = false
    }
    flip(){
        this.flipped = !this.flipped
        this.domElem.classList.toggle("flipped")
    }
}