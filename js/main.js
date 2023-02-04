let [hours, minutes, seconds, miliseconds] = 0;


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
}

const timerInterval = setInterval(startTimer(),1);

document.getElementById("startTimer").addEventListener("click", timerInterval());
document.getElementById("stopTimer").addEventListener("click", () => {
    clearInterval()
})