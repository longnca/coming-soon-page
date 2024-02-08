// countdown.js

var countDownDate = new Date("Sep 1, 2024 00:00:00").getTime();
var startTime = new Date("Feb 1, 2024 00:00:00").getTime(); 
var totalTime = countDownDate - startTime;

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var elapsed = now - startTime;
    var progress = (elapsed / totalTime) * 100;
    progress = Math.min(Math.max(progress, 0), 100); // ensures that the progress value doesn't go below 0 or above 100

    var progressBar = document.querySelector('.progress-bar span');
    progressBar.style.width = progress + '%'

    var days = Math.floor(distance / (1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance % (1000*60*60) / (1000*60)));
    var seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("launch").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
    // When countdown completes
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("launch").innerHTML = "COMPLETED";
        progressBar.style.width = '100%'
    }
}, 1000);