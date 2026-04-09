// main.js
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

let divs = document.querySelectorAll(".grid-container div");

document.addEventListener("click", function () {
    divs.forEach(div => {
        let x = randomNumber(-500, 500);
        let y = randomNumber(-500, 500);

        let rotate = randomNumber(-720, 720);

        // apply styles
        div.style.transition = "transform 1.5s ease-out";
        div.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
    });
});