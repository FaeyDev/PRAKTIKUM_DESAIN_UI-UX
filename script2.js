function hitung() {
    const inputJari = document.getElementById('jariJari');
    const txtLuas = document.getElementById('txtLuas');
    const txtKeliling = document.getElementById('txtKeliling');
    const hasilBox = document.getElementById('hasilBox');

    let r = parseFloat(inputJari.value);
    if (isNaN(r) || r <= 0) {
        alert("Mohon masukkan angka jari-jari yang valid (harus lebih dari 0).");
        hasilBox.style.display = "none";
        return;
    }

    let luas = Math.PI * r * r;

    let keliling = 2 * Math.PI * r;

    txtLuas.innerText = luas.toFixed(2);
    txtKeliling.innerText = keliling.toFixed(2);

    hasilBox.style.display = "block";
}