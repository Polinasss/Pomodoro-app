const timerBtnStart = document.getElementById('start');

let min = 25;
let sec = '00';
const minElement = document.getElementById('min');
const secElement = document.getElementById('sec');

function template () {
    minElement.innerHTML = min;
    secElement.innerHTML = sec;
}
template();

function start () {
    min = 24;
    sec = 59;
    document.getElementById('min').innerHTML = min;
    document.getElementById('sec').innerHTML = sec;

    let minutes = setInterval(minutesTimer, 60000);
    let seconds = setInterval(secondsTimer, 1000);
    function minutesTimer () {
        min = min - 1;
        document.getElementById('min').innerHTML = min;
    }
    function secondsTimer () {
        sec = sec - 1;
        document.getElementById('sec').innerHTML = sec;
        if (sec <= 0) {
            if (min <= 0) {
                clearInterval(minutes);
                clearInterval(seconds);
            }
            sec = 60;
        }
    }
}
timerBtnStart.addEventListener('click', start);