const score = {
  wins: 0,
  losses: 0,
};

function flipCoin() {
  return Math.random() < 0.5 ? "heads" : "tails";
}

function playGame(guess) {
  const result = flipCoin();
  const resultText = document.getElementById("result-text");
  const scoreText = document.getElementById("score-text");

  if (guess === result) {
    resultText.textContent = `It's ${result.toUpperCase()} — You Win! 🎉`;
    score.wins++;
  } else {
    resultText.textContent = `It's ${result.toUpperCase()} — You Lose. 😢`;
    score.losses++;
  }

  scoreText.textContent = `Wins: ${score.wins} | Losses: ${score.losses}`;
}

document.getElementById("head-button").addEventListener("click", function () {
  playGame("heads");
});

document.getElementById("tail-button").addEventListener("click", function () {
  playGame("tails");
});
