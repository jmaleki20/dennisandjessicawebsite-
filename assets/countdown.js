const weddingDay = new Date('2019/09/14 17:30:00');

// countdown HTML element for JS seletion
// the '#' here signifies 'id='; ie. <div id="countdown">
const countdownQueryselector =  '#countdown';

// some time-math helper variables
const second = 1000; // 1000 miliseconds = 1 second
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;
const year = 365 * day;


function updateCountdown(elem) {
    var timer = Math.abs(new Date() - weddingDay);

    if (timer <= 0) {
        // WEDDING TIME!!!! <3 <3
        elem.textContent = "- -  - -  - -  - -";
        return
    }

    var days = Math.floor(timer / day);
    timer = timer % day;

    var hours = Math.floor(timer / hour);
    timer = timer % hour;

    var minutes = Math.floor(timer / minute);
    timer = timer % minute;

    var seconds = Math.floor(timer / second);

    elem.textContent = days + " days, " + 
        hours + " hours, " +
        minutes + " minutes, " +
        seconds + " seconds";                
}


window.onload = function () {
    var countdownElem = document.querySelector(countdownQueryselector);

    // we do it once here, out of the interval, because
    // setInterval will start at 1, not 0, so it would take
    // a whole second before the countdown would appear otherwise.
    updateCountdown(countdownElem)

    setInterval(
        function() {updateCountdown(countdownElem)},
        1 * second,
    );
};