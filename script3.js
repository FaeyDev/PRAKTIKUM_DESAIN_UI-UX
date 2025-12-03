function hitungBiaya() {
    const masukInput = document.getElementById('jamMasuk');
    const keluarInput = document.getElementById('jamKeluar');
    const hasilBox = document.getElementById('hasilBox');
    const durasiText = document.getElementById('durasiText');
    const biayaText = document.getElementById('biayaText');

    let masuk = parseInt(masukInput.value);
    let keluar = parseInt(keluarInput.value);

    if (isNaN(masuk) || isNaN(keluar)) {
        alert("Mohon masukkan angka jam yang valid.");
        return;
    }

    if (keluar < masuk) {
        alert("Jam keluar tidak boleh lebih kecil dari jam masuk!");
        hasilBox.style.display = "none";
        return;
    }

    let lamaParkir = keluar - masuk;
    let biaya = 0;

    if (lamaParkir <= 2) {
    
        biaya = 3000;
    } else {

        let jamTambahan = lamaParkir - 2;
        biaya = 3000 + (jamTambahan * 1000);
    }

    durasiText.innerText = lamaParkir;
    biayaText.innerText = biaya.toLocaleString('id-ID');

    hasilBox.style.display = "block";
}