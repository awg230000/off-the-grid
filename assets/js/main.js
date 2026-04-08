// main.js
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let rotation = 0;
document.addEventListener("click", function () {
    let min = 10;
    let max = 40;
    rotation += randomNumber (1, 200);
    document.body.style.transform = `rotate(${rotation}deg)`;
});
