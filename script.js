
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseFloat(button.dataset.price);

        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartCountElement.textContent = cart.length;

    cartItemsElement.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name} - $${item.price}`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        itemElement.appendChild(removeButton);
        cartItemsElement.appendChild(itemElement);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});
