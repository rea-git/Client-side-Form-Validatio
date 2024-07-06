document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Clear previous error messages
        clearErrors();

        // Username validation: must be at least 3 characters
        if (username.value.length < 3) {
            usernameError.textContent = 'Username must be at least 3 characters';
            usernameError.style.display = 'block';
            isValid = false;
        }

        // Email validation: must be a valid email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        }

        // Password validation: must be at least 6 characters
        if (password.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordError.style.display = 'block';
            isValid = false;
        }

        // Confirm password validation: must match the password
        if (confirmPassword.value !== password.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordError.style.display = 'block';
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function clearErrors() {
        usernameError.style.display = 'none';
        emailError.style.display = 'none';
        passwordError.style.display = 'none';
        confirmPasswordError.style.display = 'none';
    }
});
