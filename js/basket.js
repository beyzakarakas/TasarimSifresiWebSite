document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.input-group').forEach(inputGroup => {
        const quantityInput = inputGroup.querySelector('.quantity-input');
        const decreaseButton = inputGroup.querySelector('[data-action="decrease"]');
        const increaseButton = inputGroup.querySelector('[data-action="increase"]');

        decreaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (!isNaN(currentValue)) {
                quantityInput.value = currentValue > 0 ? currentValue - 1 : 0;
            }
        });

        increaseButton.addEventListener('click', () => {
            let currentValue = parseInt(quantityInput.value);
            if (!isNaN(currentValue)) {
                quantityInput.value = currentValue + 1;
            }
        });
    });
});