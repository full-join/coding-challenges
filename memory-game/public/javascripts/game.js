window.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll('.square').forEach(item => {
  item.addEventListener("click", (e) => {
    // handle the click event
    let squareNumber = e.target.id
    console.log(`Square ${squareNumber} clicked`);
  });
});
})
