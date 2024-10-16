function checkPassword() {
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");

    if (password === "12345") {  // Set your desired password here
        document.getElementById("login-container").style.display = "none";
        document.getElementById("protected-content").style.display = "block";
    } else {
        message.textContent = "Incorrect password. Please try again.";
        message.style.color = "red";
    }
}
