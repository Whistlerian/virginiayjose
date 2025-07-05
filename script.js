// --- COUNTDOWN TIMER ---

// SET YOUR WEDDING DATE HERE
const weddingDate = new Date("December 7, 2024 17:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the wedding date
    const distance = weddingDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Add leading zeros if number is less than 10
    const formatTime = (time) => time < 10 ? `0${time}` : time;

    // Display the result in the corresponding elements
    document.getElementById("days").innerText = formatTime(days);
    document.getElementById("hours").innerText = formatTime(hours);
    document.getElementById("minutes").innerText = formatTime(minutes);
    document.getElementById("seconds").innerText = formatTime(seconds);
    
    // If the countdown is over, write some text
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "<h2>We're Married!</h2>";
    }
}, 1000);