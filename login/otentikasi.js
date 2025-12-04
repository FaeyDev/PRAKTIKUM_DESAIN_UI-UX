const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
const loading = document.getElementById('loading');
const submitButton = loginForm.querySelector('button[type="submit"]');

const validCredentials = {
    username: 'ahmad2017',
    password: 'integrity'
};

loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    loading.style.display = 'block';
    submitButton.disabled = true;
    submitButton.textContent = 'Memproses...';

    await new Promise(resolve => setTimeout(resolve, 1000));

    if (username === validCredentials.username && password === validCredentials.password) {

        sessionStorage.setItem('isLoggedIn', 'true');
        sessionStorage.setItem('username', username);

        window.location.href = 'login_success.html';
    } else {
        errorMessage.textContent = 'Username atau password salah. Silakan coba lagi.';
        errorMessage.style.display = 'block';

        loading.style.display = 'none';
        submitButton.disabled = false;
        submitButton.textContent = 'Login';

        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
});

document.getElementById('username').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.style.borderColor = '#48bb78';
    } else {
        this.style.borderColor = '#e1e5e9';
    }
});

document.getElementById('password').addEventListener('input', function() {
    if (this.value.length > 0) {
        this.style.borderColor = '#48bb78';
    } else {
        this.style.borderColor = '#e1e5e9';
    }
});