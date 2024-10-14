document.querySelectorAll('.card').forEach(card => {
    const quantityInput = card.querySelector('.quantity-input');
    const decreaseButton = card.querySelector('[data-action="decrease"]');
    const increaseButton = card.querySelector('[data-action="increase"]');

    decreaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue > 0 ? currentValue - 1 : 0;
    });

    increaseButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue < 10 ? currentValue + 1 : 10;
    });
});
