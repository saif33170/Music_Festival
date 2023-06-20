window.addEventListener('DOMContentLoaded', function() {

      var countdown = document.getElementById('countdown');
  
    // Check if countdown date is stored in local storage
      var storedCountdownDate = localStorage.getItem('countdownDate');
      var countDownDate;
  
    if (storedCountdownDate) {
      // Use the stored countdown date
      countDownDate = new Date(storedCountdownDate);
    } else {
      // Set the initial countdown date and store it in local storage
      countDownDate = new Date();
      countDownDate.setDate(countDownDate.getDate() + 3);
      countDownDate.setHours(countDownDate.getHours() + 16);
      countDownDate.setMinutes(countDownDate.getMinutes() + 53);
      countDownDate.setSeconds(countDownDate.getSeconds() + 33);
      localStorage.setItem('countdownDate', countDownDate);
    }
  
    // Function to update the countdown
    function updateCountdown() {
      // Get current date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the countdown date
      var distance = countDownDate - now;
  
      // If the countdown is finished, restart the timer
      if (distance <= 0) {
        clearInterval(countdownInterval);
        countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 3);
        countDownDate.setHours(countDownDate.getHours() + 16);
        countDownDate.setMinutes(countDownDate.getMinutes() + 53);
        countDownDate.setSeconds(countDownDate.getSeconds() + 33);
        localStorage.setItem('countdownDate', countDownDate);
        countdown.innerHTML = "Restarting...";
        setTimeout(updateCountdown, 1000);
        return;
      }
  
      // Calculate remaining days, hours, minutes, and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the countdown
      countdown.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    }
  
    // Update the countdown every 1 second
    var countdownInterval = setInterval(updateCountdown, 1000);



    // Form Validation
    var form = document.getElementById('registration-form');
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var emailInput = document.getElementById('email');
    var mobileInput = document.getElementById('mobile');


    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Validate first name
      if (firstNameInput.value.trim() === '') {
        alert('Please enter your first name.');
        firstNameInput.focus();
        return;
      }
  
      // Validate last name
      if (lastNameInput.value.trim() === '') {
        alert('Please enter your last name.');
        lastNameInput.focus();
        return;
      }
  
      // Validate email
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
      }
  
      // Validate mobile number
      var mobileRegex = /^01\d{9}$/;
      if (!mobileRegex.test(mobileInput.value.trim())) {
        alert('Please enter a valid 11-digit mobile number starting with "01".');
        mobileInput.focus();
        return;
      }
  
      // Form validated
      alert('Registration successfull!');
      // Reset the form
      form.reset(); 
    });
});

/*======== Scroll Animation ========*/
const sr = ScrollReveal ({
  distance: '25px',
  duration: 2500,
  reset: true
})

// sr.reveal('.section1', {delay:90, origin:'bottom'})

sr.reveal('.registration, .news_container, .gallery', {delay:200, origin:'bottom'})
sr.reveal('.section3 h2', {delay:200, origin:'top'})
sr.reveal('.shadow', {delay:1000, origin:'top'})
sr.reveal('.row1', {delay:200, origin:'left'})
sr.reveal('.row2', {delay:600, origin:'right'})
sr.reveal('.row3', {delay:1000, origin:'left'})
sr.reveal('.sec4_darken', {delay:200, origin:'top'})

  