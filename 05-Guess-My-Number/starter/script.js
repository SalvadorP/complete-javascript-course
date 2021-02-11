"use strict";
//.Wait for the document to load then do things.
document.addEventListener("DOMContentLoaded", function (event) {
  let number = 0;
  let button = document.querySelector(".check");
  let againBtn = document.querySelector(".again");
  let message = document.querySelector(".message");
  let body = document.querySelector("body");
  let score = document.querySelector(".score");
  let highscore = document.querySelector(".highscore");
  let highscoreValue = 0;

  const randomNumber = () => {
    number = Math.floor(Math.random() * 20);
    number = number == 0 ? number + 1 : number;
    console.info(number);
  };
  const decreaseScore = () => {
    let scoreValue = parseInt(score.innerHTML);
    scoreValue--;
    score.innerHTML = scoreValue;
  };
  const checkNumber = () => {
    let guess = document.querySelector(".guess");
    const guessValue = Number(guess.value);

    if (guessValue == number) {
      message.innerHTML = "🏆 match!";
      body.style.backgroundColor = "green";
      let scoreValue = parseInt(score.innerHTML);
      if (highscoreValue < scoreValue) {
        highscoreValue = scoreValue;
        highscore.innerHTML = scoreValue;
      }
    }
    if (guessValue > number) {
      message.innerHTML = "📉 lower";
      decreaseScore();
    }
    if (guessValue < number) {
      message.innerHTML = "📈 upper";
      decreaseScore();
    }
    if (guessValue == 0) {
      message.innerHTML = "⛔ No number or zero";
    }
  };
  againBtn.addEventListener("click", () => {
    body.style.backgroundColor = "#222";
    score.innerHTML = 20;
    message.innerHTML = "Start guessing...";
    randomNumber();
  });
  button.addEventListener("click", checkNumber);

  randomNumber();
});
