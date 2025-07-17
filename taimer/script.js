let timerInterval;
let timeLeft = 0;

function updateDisplay() {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');
  document.getElementById('display').textContent = `${minutes}:${seconds}`;
}

function startTimer() {
  if (timerInterval) return;

  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;
  timeLeft = minutes * 60 + seconds;

  updateDisplay();

  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Время вышло!");
    } else {
      timeLeft--;
      updateDisplay();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timeLeft = 0;
  updateDisplay();
}