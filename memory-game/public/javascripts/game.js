window.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.square').forEach(item => {
  item.addEventListener("click", (e) => {
    // handle the click event
    let square = e.target.parentElement.parentElement;
    let squareNumber = square.id
    if (square.classList.contains("flipped")){
        square.classList.remove('flipped')
    } else {
        square.classList.add('flipped')
    }
    console.log(`Square ${squareNumber} clicked`,square.classList);
  });
});
})
