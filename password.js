function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'palanbuel';  // This is the correct password

    if (password === correctPassword) {
        window.location.href = 'page1.html';  // Redirect to first page
    } else {
        document.getElementById('error-message').textContent = "Incorrect Password. Try again.";
    }
}
