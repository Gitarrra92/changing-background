const myButton = document.querySelector(".colorBtn");
const backgroundCl = document.querySelector("body");

let colors = ["yellow", "green", "blue", "#6845E1"];

myButton.addEventListener("click", changeBgr);

function changeBgr() {
    let randomColor = Math.floor(Math.random() * colors.length);
    backgroundCl.style.backgroundColor = colors[randomColor];

}