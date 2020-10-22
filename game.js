let userScore = 0;
let computerScore = 0;
computerChoices = ["Rock", "Paper", "Scissors"];
restart = false;

rockButton = document.getElementById("rock-button");
paperButton = document.getElementById("paper-button");
scissorsButton = document.getElementById("scissors-button");
result = document.getElementById("result");
scoreboard = document.getElementById("scoreboard");
restartButton = document.getElementById("restart-button");
restartDiv = document.getElementById("restart");
scoreResults = document.getElementById("score-and-result");
yesButton = document.getElementById("yes");
noButton = document.getElementById("no");
h2 = document.getElementById("h2");

let userChooseRock = function () {
  if (userScore < 5 && computerScore < 5) {
    computerChoice = computerChoices[Math.floor(Math.random() * 3)];
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
  }
};
let userChoosePaper = function () {
  if (userScore < 5 && computerScore < 5) {
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
  }
};

let userChooseScissors = function () {
  if (userScore < 5 && computerScore < 5) {
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
  }
};

let displayScoreboard = function () {
  scoreboard.textContent =
    "User Score: " + userScore + "\nComputer Score: " + computerScore;
  showResult();
};

let showResult = function () {
  if (userScore == 5) {
    h2.textContent = "You win! Congratulations!!";
    toggleRestart();
  } else if (computerScore == 5) {
    h2.textContent = "Oh no, the computer wins!";
    toggleRestart();
  }
  scoreResults.appendChild(h2);
};

let toggleRestart = function () {
  restart = !restart;
  if (restart) {
    restartDiv.style.display = "flex";
  } else {
    restartDiv.style.display = "none";
  }
};

let handleYes = function () {
  userScore = 0;
  computerScore = 0;
  result.textContent = "";
  h2.textContent = "";
  displayScoreboard();
  toggleRestart();
};

let handleNo = function () {
  if (userScore < 5 && computerScore < 5) {
    toggleRestart();
  } else {
    return;
  }
};

rockButton.addEventListener("click", userChooseRock);
paperButton.addEventListener("click", userChoosePaper);
scissorsButton.addEventListener("click", userChooseScissors);
restartButton.addEventListener("click", toggleRestart);
yesButton.addEventListener("click", handleYes);
noButton.addEventListener("click", toggleRestart);
