document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("loginForm");
    let message = document.getElementById("message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let username = form.username.value;
        let password = form.password.value;
        if (username.trim() === "") {
            message.innerText = "Por favor, ingrese un nombre.";
            message.style.color = "red";
        } else if (password.trim() === "") {
            message.innerText = "Por favor, ingrese una contraseña.";
            message.style.color = "red";
        } else if (username === "usuario" && password === "1234") {
            message.innerText = "Inicio de sesión exitoso.";
            message.style.color = "green";
            form.reset();
        }
        message.classList.remove("hidden");
    });
});
