
let clicks = 0;
let countdown = 300;

function updateUI() {
  document.getElementById("timer").textContent =
    `Time left: ${countdown}`;
  document.getElementById("counter").textContent = `Clicks: ${clicks}`;
}

function tick() {
  countdown--;
  if (countdown <= 0) {
    countdown = 300;
  }
  updateUI();
}

function onClick() {
  clicks += 1;
  updateUI();
}

function onStart() {
  clicks = 0;
  document.getElementById("startButton").disabled = true
  document.getElementById("clickButton").disabled = false
  setInterval(() => tick(), 1000)
}

document.getElementById("startButton").addEventListener("click", onStart);
document.getElementById("clickButton").addEventListener("click", onClick);
document.getElementById("clickButton").disabled = true;