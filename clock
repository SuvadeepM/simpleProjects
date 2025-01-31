function updateClock() {
            let now = new Date();
            let clock = document.getElementById('clock')
            let hours = String(now.getHours());
            let minutes = String(now.getMinutes()).padStart(2, '0');
            let seconds = String(now.getSeconds()).padStart(2, '0');
 
            let period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 (midnight) to 12, and 13-23 to 1-11

    // Display the time
    clock.textContent = `${hours}:${minutes}:${seconds} ${period}`;
        }

setInterval(updateClock, 1000);

        // Initialize clock immediately
        updateClock();
