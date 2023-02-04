let 
hours = 0, 
minutes = 0, 
seconds = 0, 
miliseconds = 0;

let int = null;

const timer = document.getElementById("timer");
const start = document.getElementById("startTimer");
const stop = document.getElementById("stopTimer");


const startTimer = () => {
    miliseconds++;

    if(miliseconds == 999) {
        seconds++;
        miliseconds = 0;

        if(seconds == 59) {
            minutes++;
            seconds = 0;

            if(minutes == 59) {
                hours++;
                minutes = 0;
            }
        }
    }

    timer.innerHTML = `${hours}:${minutes}:${seconds}:${miliseconds}`
}

const myInterval = () => {
    if(int !== null) {
        debugger
        clearInterval(int);
    }

    int = setInterval(startTimer, 1);
    console.log(int);
}

start.addEventListener("click", myInterval);
stop.addEventListener("click", () => {
    debugger
    clearInterval(int);
    console.log(int);
})
