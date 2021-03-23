// to see this working, replace game.js with solution.js in views/layout.pug
window.addEventListener('DOMContentLoaded', ()=>{
    const holes = document.querySelectorAll('.hole');
    const moles = document.querySelectorAll('.mole');
    const scoreHTML = document.querySelector('.score');
    let score = 0;


    const popUpRandom = () => {
        const randNum = Math.floor(Math.random()* 6);
        holes[randNum].classList.add('up');
        setTimeout(()=>{
            holes[randNum].classList.remove("up")
        }, 1000)
    }
    moles.forEach(elem => {
        elem.addEventListener("click", (e)=>{
            let clickedMole = e.target;
            if (clickedMole.parentElement.classList.contains("up")){
                score += 1;
                scoreHTML.innerHTML = score;
            }
        })
    })
    
    setInterval(popUpRandom, 1000)
});