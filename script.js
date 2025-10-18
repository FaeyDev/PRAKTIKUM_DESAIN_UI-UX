document.addEventListener('DOMContentLoaded', () => {

    const mainImage = document.getElementById('main-product-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.src = this.src;
        });
    });

    function handleOptionSelection(containerId) {
        const optionsContainer = document.getElementById(containerId);
        if (optionsContainer) {
            const optionButtons = optionsContainer.querySelectorAll('.option-btn');
            optionButtons.forEach(btn => {
                btn.addEventListener('click', function() {
                    optionButtons.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }
    }

    handleOptionSelection('sugar-options');
    handleOptionSelection('size-options');

    const quantityInput = document.getElementById('quantity-input');
    const btnPlus = document.getElementById('btn-plus');
    const btnMinus = document.getElementById('btn-minus');

    btnPlus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

    btnMinus.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    const cartCount = document.getElementById('cart-count');

    addToCartBtn.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        const currentCartCount = parseInt(cartCount.textContent);

        cartCount.textContent = currentCartCount + quantity;

        cartCount.style.transform = 'scale(1.3)';
        cartCount.style.transition = 'transform 0.2s';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
        }, 200);

        alert(` Selamat! ${quantity} Minuman anda berhasil ditambahkan ke keranjang!
        Terima kasih telah belanja Di toko kami:)`);
    });

});
