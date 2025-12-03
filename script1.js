const NILAI_KURS = 16688; 
function hitungKeRupiah() {
    let inputDolar = document.getElementById("inputDolar").value;
    let output = document.getElementById("hasilRupiah");

    if (inputDolar === "" || inputDolar < 0) {
        alert("Masukkan jumlah Dolar yang valid!");
        return;
    }

    let hasil = inputDolar * NILAI_KURS;

    let formatRupiah = new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR' 
    }).format(hasil);

    output.innerHTML = "Hasil: " + formatRupiah;
    output.style.color = "#28a745";
}

function hitungKeDolar() {
    let inputRupiah = document.getElementById("inputRupiah").value;
    let output = document.getElementById("hasilDolar");

    if (inputRupiah === "" || inputRupiah < 0) {
        alert("Masukkan jumlah Rupiah yang valid!");
        return;
    }

    let hasil = inputRupiah / NILAI_KURS;

    let formatDolar = new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    }).format(hasil);

    output.innerHTML = "Hasil: " + formatDolar;
    output.style.color = "#007bff";
}