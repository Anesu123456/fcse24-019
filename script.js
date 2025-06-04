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

    
