document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('bookingForm');
    const formWrapper = document.querySelector('.form-wrapper');
    const summaryWrapper = document.getElementById('summaryDisplay');
    const summaryDetails = document.getElementById('summaryDetails');
    const namaInput = document.getElementById('namaPelanggan');
    const emailInput = document.getElementById('email');
    const jamInput = document.getElementById('jamKeberangkatan');
    const tujuanInput = document.getElementById('tujuan');
    const jumlahTiketInput = document.getElementById('jumlahTiket');
    const errorNama = document.getElementById('errorNama');
    const errorEmail = document.getElementById('errorEmail');
    const errorJam = document.getElementById('errorJam');
    const errorTujuan = document.getElementById('errorTujuan');
    const errorJumlah = document.getElementById('errorJumlah');
    function showError(inputElement, errorElement, message) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        inputElement.classList.add('input-error');
    }

    function clearError(inputElement, errorElement) {
        errorElement.textContent = '';
        errorElement.style.display = 'none';
        inputElement.classList.remove('input-error');
    }
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let isFormValid = true;
        clearError(namaInput, errorNama);
        if (namaInput.value.trim() === '') {
            showError(namaInput, errorNama, 'Nama pelanggan wajib diisi.');
            isFormValid = false;
        } else if (namaInput.value.length > 30) {
            showError(namaInput, errorNama, 'Nama pelanggan maksimal 30 karakter.');
            isFormValid = false;
        }
        
        clearError(emailInput, errorEmail);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            showError(emailInput, errorEmail, 'Email wajib diisi.');
            isFormValid = false;
        } else if (!emailRegex.test(emailInput.value)) {
            showError(emailInput, errorEmail, 'Format email tidak valid.');
            isFormValid = false;
        }

        clearError(jamInput, errorJam);
        if (jamInput.value === '') {
            showError(jamInput, errorJam, 'Jam keberangkatan wajib dipilih.');
            isFormValid = false;
        }

        clearError(tujuanInput, errorTujuan);
        if (tujuanInput.value.trim() === '') {
            showError(tujuanInput, errorTujuan, 'Tujuan keberangkatan wajib diisi ya.');
            isFormValid = false;
        }

        clearError(jumlahTiketInput, errorJumlah);
        const jumlahTiketValue = parseInt(jumlahTiketInput.value);
        if (jumlahTiketInput.value.trim() === '' || isNaN(jumlahTiketValue)) {
            showError(jumlahTiketInput, errorJumlah, 'Jumlah tiket wajib diisi dengan angka.');
            isFormValid = false;
        } else if (jumlahTiketValue < 1 || jumlahTiketValue > 10) {
            showError(jumlahTiketInput, errorJumlah, 'Jumlah tiket harus antara 1 dan 10.');
            isFormValid = false;
        }

        if (isFormValid) {
            formWrapper.style.display = 'none';
            summaryWrapper.style.display = 'block';
            summaryDetails.innerHTML = `
                <p><strong>Nama Pelanggan:</strong> ${namaInput.value}</p>
                <p><strong>Email:</strong> ${emailInput.value}</p>
                <p><strong>Jam Keberangkatan:</strong> ${jamInput.value}</p>
                <p><strong>Tujuan:</strong> ${tujuanInput.value}</p>
                <p><strong>Jumlah Tiket:</strong> ${jumlahTiketValue} Tiket</p>
            `;
        } else {
            console.log('Form tidak valid. Mohon perbaiki kesalahan.');
        }
    });
});