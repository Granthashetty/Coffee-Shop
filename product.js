document.addEventListener('DOMContentLoaded', function() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    document.querySelectorAll('.buy-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const productName = this.getAttribute('data-name');
            const productPrice = parseFloat(this.getAttribute('data-price'));

            // Add product to the cart
            const li = document.createElement('li');
            li.textContent = `${productName} - ${productPrice.toFixed(2)}`;
            cartItems.appendChild(li);

            // Update total price
            total += productPrice;
            cartTotal.textContent = total.toFixed(2);
        });
    });
});
document.querySelector('.back-to-top').addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });