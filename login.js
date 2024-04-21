function togglePassword() {
    const passwordInput = document.getElementById('password');
    const showPasswordSpan = document.querySelector('.show-password');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        showPasswordSpan.textContent = 'Hide Password';
    } else {
        passwordInput.type = 'password';
        showPasswordSpan.textContent = 'Show Password';
    }
}