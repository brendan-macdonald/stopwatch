let elapsedSeconds = 0;
const time = document.getElementById("time");

let interval = 0;

function leadingZeros(value) {
    return String(value).padStart(2, "0");
};

function timeDisplay() {
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    time.innerHTML = `${leadingZeros(minutes)}:${leadingZeros(seconds)}`;
};

function incrementSeconds() {
    elapsedSeconds++;
    timeDisplay();
};

function startTime() {
    if (!interval) {
        interval = setInterval(incrementSeconds, 1000);
    }
};

function stopTime() {
    clearInterval(interval);
    interval = null;
};

function resetTime() {
    stopTime();
    elapsedSeconds = 0;
    timeDisplay();
};