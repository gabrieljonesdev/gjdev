function checkPassword() {
    var password = document.getElementById("password").value.trim();  // Rimuove spazi prima e dopo
    var message = document.getElementById("message");

    if (password === "12345") {  // Password corretta
        document.getElementById("login-container").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        message.textContent = "Incorrect password. Please try again.";
        message.style.color = "red";
    }
}
