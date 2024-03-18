let cartItems = [];

function addToCart(productId) {
    const product = document.querySelector(`.product[data-id="${productId}"]`);
    const productName = product.querySelector('h2').innerText;
    const productPrice = parseFloat(product.querySelector('p').innerText.slice(1));

    cartItems.push({
        id: productId,
        name: productName,
        price: productPrice,
    });

    updateCart();
}

function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartModalItems = document.getElementById('cart-items');

    cartCount.innerText = cartItems.length;

    while (cartModalItems.firstChild) {
        cartModalItems.removeChild(cartModalItems.firstChild);
    }

    cartItems.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartModalItems.appendChild(cartItem);
    });
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

function checkout() {
    // Check if the cart is not empty
    if (cartItems.length === 0) {
        alert('Your cart is empty. Add items before checking out.');
        return;
    }

    // Simulate payment processing (you can replace this with your actual payment logic)
    const totalAmount = calculateTotalAmount(); // Implement a function to calculate the total amount
    const paymentSuccessful = processPayment(totalAmount);

    if (paymentSuccessful) {
        // Order processing logic (replace with your actual order processing logic)
        alert('Payment successful! Your order has been placed.');

        // Clear the cart after successful payment
        cartItems = [];
        updateCart();
        closeCart();
    } else {
        alert('Payment failed. Please try again.');
    }
}

// Example function to calculate the total amount of items in the cart
function calculateTotalAmount() {
    let total = 0;
    for (const item of cartItems) {
        total += item.price;
    }
    return total;
}

// Example function to simulate payment processing (replace with your actual payment logic)
function processPayment(amount) {
    // Add your payment processing logic here
    // For demonstration purposes, return true to simulate a successful payment
    return true;
}
