export default class Card {
    constructor(value, id){
        this.value = value
        this.domElement = this.createDomElement(id)
        this.flipped = false
    }

    static isMatch(cards){
        // TODO: update to not care about length of array
        return cards[0].value === cards[1].value
    }

    flip(){
        if(this.flipped) return;
        this.flipped = true;
        this.domElement.classList.add("flipped")
    }

    reset(){
        if(!this.flipped) return;
        this.flipped = false;
        this.domElement.classList.remove("flipped")
    }

    // div.flip-card(id=n++)
    //       div.flip-card-inner
    //         div.flip-card-front
    //         div.flip-card-back.bg-yellow-400.text-5xl
    createDomElement(id){
        const div1 = document.createElement('div')
        div1.classList.add("flip-card")
        div1.id = id
        const div2 = document.createElement('div')
        div2.classList.add("flip-card-inner")
        const div3a = document.createElement('div')
        div3a.classList.add("flip-card-front")
        const div3b = document.createElement('div')
        div3b.classList.add("flip-card-back")
        div3b.classList.add("bg-yellow-400")
        div3b.classList.add("text-5xl")
        div1.appendChild(div2)
        div2.appendChild(div3a)
        div2.appendChild(div3b)

        div3b.innerText = this.value
        
        div1.addEventListener("click", this.flip.bind(this))

        return div1
    }
}