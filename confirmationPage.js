/* 
This is confirmation page JS
            \/
            \/
            \/
*/

//Count Down Timer for page redirect

let timerTime = 99999;
document.getElementById("countdown").innerText = timerTime;
let interval = setInterval(timer, 1000)
function timer() {
    timerTime--;
    document.getElementById("countdown").innerText = timerTime;
    if (timerTime <= 0) {
        clearInterval(interval)
        document.location.href = "contact.html"
    }
}