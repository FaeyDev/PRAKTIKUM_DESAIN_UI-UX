document.addEventListener('DOMContentLoaded', function() {

    const bilangan1Input = document.getElementById('bilangan1');
    const bilangan2Input = document.getElementById('bilangan2');
    const hitungButton = document.getElementById('hitung');
    const hasilSpan = document.getElementById('nilai-hasil');

    hitungButton.addEventListener('click', function() {

        const angka1 = parseFloat(bilangan1Input.value);
        const angka2 = parseFloat(bilangan2Input.value);

        if (isNaN(angka1) || isNaN(angka2)) {
            alert('Harap masukkan angka yang valid di kedua kolom!');
            return;
        }

        const jumlah = angka1 + angka2;

        hasilSpan.textContent = jumlah;
    });

});