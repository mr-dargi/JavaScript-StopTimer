let [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];

let start = document.getElementById("startTimer");
let stop = document.getElementById("stopTimer");
let reset = document.getElementById("resetTimer");
let int = null;

let timer = document.getElementById("timer");

const startTimer = () => {
  miliseconds+= 10;

  if(miliseconds == 1000) {
    seconds++;
    miliseconds = 0;

    if(seconds == 60) {
      minutes++;
      seconds = 0;

      if(minutes == 60){
        hours++;
        minutes = 0;

        if(hours == 60) {
          clearInterval(int);
        }
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

  timer.innerHTML = `${h}:${m}:${s}:${ms}`;
}

const myInterval = () => {
  if(int !== null) {
    clearInterval(int);
  }

  int = setInterval(startTimer, 10);
}

start.addEventListener("click", myInterval);

stop.addEventListener("click", () => {
  clearInterval(int);
})

reset.addEventListener("click", () => {
  clearInterval(int);

  [hours, minutes, seconds, miliseconds] = [0, 0, 0, 0];
  timer.innerHTML = "00:00:00:000";
})

