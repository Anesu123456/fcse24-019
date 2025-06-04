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

    // Email Signup Form
    const signupBtn = document.getElementById("signupBtn");
    if (signupBtn) { // Ensure the signup button exists
        signupBtn.addEventListener("click", function () {
            const emailInput = document.getElementById("emailInput");
            // Check if emailInput exists before trying to access its value
            if (!emailInput) {
                console.error("Email input element not found.");
                return;
            }
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
    }


    // Add to Cart functionality (only applies if these elements exist on the page)
    const addToCartBtn = document.getElementById('add-to-cart-btn');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productSize = document.getElementById('product-size');
    const productQuantity = document.getElementById('product-quantity');
    const mainProductImage = document.getElementById('MainImg');
    const messageBox = document.getElementById('messageBox');

    // Function to display a message to the user
    function showMessage(message, type = 'success') {
        if (messageBox) { // Ensure messageBox exists before trying to use it
            messageBox.textContent = message;
            messageBox.className = `message-box show ${type}`; // Add type for different styles if needed
            setTimeout(() => {
                messageBox.className = 'message-box';
            }, 3000); // Hide after 3 seconds
        } else {
            console.warn("Message box element not found. Message: " + message);
            // Fallback for cases where messageBox might not be present
            alert(message);
        }
    }

    if (addToCartBtn && productName && productPrice && productSize && productQuantity && mainProductImage) {
        addToCartBtn.addEventListener('click', () => {
            const name = productName.textContent;
            // Remove 'P ' and ',' from price, then parse to float
            const price = parseFloat(productPrice.textContent.replace('P ', '').replace(',', ''));
            const size = productSize.value;
            const quantity = parseInt(productQuantity.value);
            const image = mainProductImage.src;

            if (quantity < 1 || isNaN(quantity)) { // Added isNaN check for quantity
                showMessage("Quantity must be at least 1 and a valid number.", "error");
                return;
            }

            const product = {
                id: `${name}-${size}`, // Unique ID for product + size combination
                name,
                price,
                size,
                quantity,
                image
            };

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            // Check if product with same name and size already exists in cart
            const existingProductIndex = cart.findIndex(item => item.id === product.id);

            if (existingProductIndex > -1) {
                // Update quantity if product already in cart
                cart[existingProductIndex].quantity += quantity;
                showMessage(`${quantity} more "${name}" (Size: ${size}) added to cart!`);
            } else {
                // Add new product to cart
                cart.push(product);
                showMessage(`"${name}" (Size: ${size}) added to cart!`);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            console.log('Cart updated:', cart);
        });
    } else {
        console.warn("One or more 'Add to Cart' elements not found. Add to Cart functionality may not work.");
    }
});