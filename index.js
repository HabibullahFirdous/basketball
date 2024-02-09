let homeScore = document.getElementById("score-home");

let scoreH = 0;
function addOne() {
  scoreH = scoreH + 1;
  homeScore.textContent = scoreH;
}
function addTwo() {
  scoreH = scoreH + 2;
  homeScore.innerHTML = scoreH;
}
function addThree() {
  scoreH = scoreH + 3;
  homeScore.innerText = scoreH;
}

let guestScore = document.getElementById("scoreG");

let score = 0;
function addOneG() {
  score = score + 1;
  guestScore.textContent = score;
}
function addTwoG() {
  score = score + 2;
  guestScore.textContent = score;
}
function addThreeG() {
  score = score + 3;
  guestScore.textContent = score;
}

function reset() {
  scoreH = 0;
  score = 0;
  homeScore.innerHTML = 0;
  guestScore.textContent = 0;
}
