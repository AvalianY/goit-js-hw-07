const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    const form = event.target;
    const tempEmail = form.elements.email.value.trim();
    const tempPassword = form.elements.password.value.trim();

    if (tempEmail === "" || tempPassword === "") {
        form.elements.email.value = tempEmail;
        form.elements.password.value = tempPassword;
        return alert("All form fields must be filled in");
    }
    else {
        const newObj = {
            email: tempEmail,
            password: tempPassword
        }
        form.reset();
        return console.log(newObj);
    }
});