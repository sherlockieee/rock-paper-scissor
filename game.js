let userScore = 0;
let computerScore = 0;
computerChoices = ["Rock", "Paper", "Scissors"];

rockButton = document.getElementById("rock-button");
paperButton = document.getElementById("paper-button");
scissorsButton = document.getElementById("scissors-button");
result = document.getElementById("result");
scoreboard = document.getElementById("scoreboard");
restartButton = document.getElementById("restart-button");

let userChooseRock = function () {
  computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  if (computerChoice == "Paper") {
    result.innerHTML = "Computer chooses paper. You lose!";
    computerScore += 1;
  } else if (computerChoice == "Rock") {
    result.innerHTML = "Computer chooses rock. It's a draw!";
  } else {
    result.innerHTML = "Computer chooses scissors. You win!";
    userScore += 1;
  }
  displayScoreboard();
  createRestartButton();
};
let userChoosePaper = function () {
  computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  if (computerChoice == "Paper") {
    result.innerHTML = "Computer chooses paper. It's a draw!";
  } else if (computerChoice == "Rock") {
    result.innerHTML = "Computer chooses rock. You win!";
    userScore += 1;
  } else {
    result.innerHTML = "Computer chooses scissors. You lose!";
    computerScore += 1;
  }
  displayScoreboard();
  createRestartButton();
};

let userChooseScissors = function () {
  computerChoice = computerChoices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  if (computerChoice == "Paper") {
    result.innerHTML = "Computer chooses paper. You win!";
    userScore += 1;
  } else if (computerChoice == "Rock") {
    result.innerHTML = "Computer chooses rock. You lose!";
    computerScore += 1;
  } else {
    result.innerHTML = "Computer chooses scissors. It's a draw!";
  }
  displayScoreboard();
};

let displayScoreboard = function () {
  scoreboard.innerHTML =
    "User Score: " + userScore + "\nComputer Score: " + computerScore;
};

let restartGame = function () {
  if (confirm("Are you sure you want to restart? Your scores will be reset")) {
    userScore = 0;
    computerScore = 0;
    result.innerHTML = "";
    displayScoreboard();
  }
};

rockButton.addEventListener("click", userChooseRock);
paperButton.addEventListener("click", userChoosePaper);
scissorsButton.addEventListener("click", userChooseScissors);
restartButton.addEventListener("click", restartGame);
