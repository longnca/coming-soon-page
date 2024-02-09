// Refactoring version of countdown.js

(function() {
    const countDownDate = new Date("July 1, 2024 00:00:00").getTime();
    const startTime = new Date("Feb 1, 2024 00:00:00").getTime(); 
    const totalTime = countDownDate - startTime;

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countDownDate - now;
        const elapsed = now - startTime;
        let progress = (elapsed / totalTime) * 100;
        progress = Math.min(Math.max(progress, 0), 100); // ensures that the progress value doesn't go below 0 or above 100

        const progressBar = document.querySelector('.progress-bar span');
        progressBar.style.width = progress + '%';

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("launch").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s `;
        
        // When countdown completes
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("launch").innerHTML = "COMPLETED";
            progressBar.style.width = '100%';
        }
    }

    // Start the countdown update interval
    const countdownTimer = setInterval(updateCountdown, 1000);

    // In case you need to clear the countdown somewhere else in your code, you can now do:
    // clearInterval(countdownTimer);
})();
