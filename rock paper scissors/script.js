const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const resetScoreBtn = document.querySelector(".reset-score");
const scoreContainer = document.getElementsByClassName("score-container");
const enemyPick = document.querySelector(".enemy-pick");

const imgClear = "images/nothing.png";
const imgRock = "images/rock.png";
const imgPaper = "images/paper.png";
const imgScissors = "images/scissors.png";

let userScoreContent = document.querySelector(".user-score-content");
let enemyScoreContent = document.querySelector(".enemy-score-content");

let playerMove;
let enemyMove;
let gameScore = [0, 0];
let random;

/* score results */
let win = 1;
let lose = -1;
let draw = 0;

let score;

/* main functions */
const determineEnemyMove = function () {
  random = Math.random();
  if (random <= 0.33) {
    enemyMove = "rock";
    enemyPick.src = imgRock;
  }
  if (random > 0.33 && random < 0.66) {
    enemyMove = "paper";
    enemyPick.src = imgPaper;
  }
  if (random >= 0.66) {
    enemyMove = "scissors";
    enemyPick.src = imgScissors;
  }
};
const determineWinner = function (playerMove, enemyMove) {
  if (playerMove == "rock" && enemyMove == "rock") {
    console.log("Draw");
    score = draw;
  }
  if (playerMove == "rock" && enemyMove == "paper") {
    console.log("Lose");
    score = lose;
  }
  if (playerMove == "rock" && enemyMove == "scissors") {
    console.log("Win");
    score = win;
  }
  if (playerMove == "paper" && enemyMove == "rock") {
    console.log("Win");
    score = win;
  }
  if (playerMove == "paper" && enemyMove == "paper") {
    console.log("Draw");
    score = draw;
  }
  if (playerMove == "paper" && enemyMove == "scissors") {
    console.log("Lose");
    score = lose;
  }
  if (playerMove == "scissors" && enemyMove == "rock") {
    console.log("Lose");
    score = lose;
  }
  if (playerMove == "scissors" && enemyMove == "paper") {
    console.log("Win");
    score = win;
  }
  if (playerMove == "scissors" && enemyMove == "scissors") {
    console.log("Draw");
    score = draw;
  }
};
const calculateScore = function () {
  if (score == win) {
    gameScore[0]++;
    userScoreContent.textContent = gameScore[0];
    document.querySelector(".score").style.removeProperty("background-image");
    document.querySelector(".score").style.backgroundColor = "#1be810";
  }
  if (score == lose) {
    gameScore[1]++;
    enemyScoreContent.textContent = gameScore[1];
    document.querySelector(".score").style.removeProperty("background-image");
    document.querySelector(".score").style.backgroundColor = "#e81043";
  }
  if (score == draw) {
    document.querySelector(".score").style.removeProperty("background-image");
    document.querySelector(".score").style.backgroundColor = "grey";
  }
};

/* main interaction */
rock.addEventListener("click", function () {
  determineEnemyMove();
  playerMove = "rock";
  console.log(`Enemy move: ${enemyMove}`, random);
  console.log(`playerMove = ${playerMove}`);
  determineWinner(playerMove, enemyMove);
  calculateScore();
  console.log(gameScore);
  localStorage.setItem("gameScore", gameScore);
});

paper.addEventListener("click", function () {
  determineEnemyMove();
  playerMove = "paper";
  console.log(`Enemy move: ${enemyMove}`, random);
  console.log(`playerMove = ${playerMove}`);
  determineWinner(playerMove, enemyMove);
  calculateScore();
  console.log(gameScore);
  localStorage.setItem("gameScore", gameScore);
});

scissors.addEventListener("click", function () {
  determineEnemyMove();
  playerMove = "scissors";
  console.log(`Enemy move: ${enemyMove}`, random);
  console.log(`playerMove = ${playerMove}`);
  determineWinner(playerMove, enemyMove);
  calculateScore();
  console.log(gameScore);
  localStorage.setItem("gameScore", gameScore);
});

/* buttons */
resetScoreBtn.addEventListener("click", function () {
  userScoreContent.textContent = 0;
  enemyScoreContent.textContent = 0;
  gameScore = [0, 0];
});
