document.addEventListener('DOMContentLoaded', function() {

    const exchangeRates = {
        USD: 9915,
        SGD: 13472,
        MYR: 874,
        JPY: 120,
        EUR: 15888,
        SAR: 3592
    };

    const foreignAmountInput = document.getElementById('foreign-amount');
    const currencySelect = document.getElementById('currency-select');
    const rupiahResultInput = document.getElementById('rupiah-result');

    function convertCurrency() {

        const amount = parseFloat(foreignAmountInput.value);
        const currency = currencySelect.value;

        if (isNaN(amount) || amount === '' || currency === '') {
            rupiahResultInput.value = '';
            return;
        }

        const rate = exchangeRates[currency];

        const resultInRupiah = amount * rate;

        rupiahResultInput.value = 'Rp ' + resultInRupiah.toLocaleString('id-ID');
    }

    currencySelect.addEventListener('change', convertCurrency);

    foreignAmountInput.addEventListener('input', convertCurrency);
});