function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'ilovedaniel123';  // The correct password

    if (password === correctPassword) {
        // Save a login token in localStorage
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'page1.html';  // Redirect to the first page
    } else {
        document.getElementById('error-message').textContent = "Incorrect Password. Try again.";
    }
}
