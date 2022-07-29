"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;
let score = 20;

const displayMessage = function (message) {
    document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
    document.querySelector(".score").textContent = score;
};

document.querySelector(".number").value = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        displayMessage("⛔ No number!");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number");
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "300px";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? "📈 Too high" : "📉 Too low");
            score--;
            displayScore(score);
        } else {
            displayMessage("💥 You lost the game");
            displayScore(0);
        }
    }
});

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayScore(score);
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "150px";
    document.querySelector(".number").textContent = "?";
    displayMessage("Start guessing...");
    document.querySelector(".guess").value = "";
});
