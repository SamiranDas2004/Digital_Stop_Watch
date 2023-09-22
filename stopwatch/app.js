

let [seconds, minutes, hours] = [0, 0, 0];
let displaytime = document.querySelector(".timedisplay");  // Corrected selector
let timer=null;
function stopwatch() {
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displaytime.innerText = hours + ":" + minutes + ":" + seconds;  // Used innerText
    seconds++;  // Increment seconds for the next interval
}

const watchstart = () => {
   timer= setInterval(stopwatch, 1000);  // Use setInterval directly without storing it in a variable
}
function watchPause() {
    clearInterval(timer);
}
document.getElementById("start").addEventListener('click', watchstart);
document.getElementById("pause").addEventListener('click',watchPause);
document.getElementById("reset").addEventListener('click',()=>{
    clearInterval(timer);
  
    displaytime.innerHTML="00:00:00";
})

