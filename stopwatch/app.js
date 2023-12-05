const timerEl = document.getElementById("timer")
const startEl = document.getElementById("start")
const stopEl = document.getElementById("stop")
const resetEl = document.getElementById("reset")

let startTime = 0
let elapsedTime = 0
let timerInterval

function startTimer() {
  startTime = Date.now() - elapsedTime

  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime
    timerEl.textContent = formatTime(elapsedTime)
  }, 10)

  startEl.disabled = true
  stopEl.disabled = false
}

function formatTime(elapsedTime) {
  const milliSeconds = Math.floor((elapsedTime % 1000) / 10)
  const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000)
  const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60))
  return (
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" + 
    (seconds ? (seconds > 9 ? seconds : "0" + seconds) : "00") +
    ":" +
    (milliSeconds > 9 ? milliSeconds : "0" + milliSeconds)
  )
}

function stopTimer() {
  clearInterval(timerInterval)
  startEl.disabled = false
  stopEl.disabled = true
}

function resetTimer() {
  clearInterval(timerInterval)
  elapsedTime = 0
  timerEl.textContent = "00:00:00"
  startEl.disabled = false
  stopEl.disabled = true
}

startEl.addEventListener("click", startTimer)
stopEl.addEventListener("click", stopTimer)
resetEl.addEventListener("click", resetTimer)