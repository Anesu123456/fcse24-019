const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active'); 
  })
}

if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active'); 
    })
  }

document.getElementById("signupBtn").addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput");
    const email = emailInput.value.trim();

    // Basic email validation pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      alert("Please enter your email address.");
    } else if (!emailPattern.test(email)) {
      alert("Invalid email address. Please enter a valid one.");
    } else {
      alert("Thank you for subscribing!");
      emailInput.value = ""; // Clear input after success
    }
  });

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Navigation Toggle
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    // Check if the 'bar' element exists before adding an event listener
    if (bar) {
        bar.addEventListener('click', () => {
            // Add 'active' class to the navigation bar to show it
            nav.classList.add('active');
        });
    }

    // Check if the 'close' element exists before adding an event listener
    if (close) {
        close.addEventListener('click', () => {
            // Remove 'active' class from the navigation bar to hide it
            nav.classList.remove('active');
        });
    }
});

    
