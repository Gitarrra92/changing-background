const myButton = document.querySelector(".colorBtn");
const backgroundCl = document.querySelector("body");
const hex = document.querySelector(".hex");

const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A","B","C", "D", "E", "F"];

myButton.addEventListener("click", changeBgr);

function changeBgr() {
let hexCol = "#";

for(let i = 0; i < 6; i++) {
  let random = Math.floor(Math.random() * hexNumbers.length);
  hexCol += hexNumbers[random];
}

}
backgroundCl.style.backgroundColor = hexCol;
hex.innerHTML = hexCol;
