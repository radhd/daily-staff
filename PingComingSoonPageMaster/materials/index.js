const button = document.getElementById('button');

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail();
});


function validateEmail() {
    const emailInput = document.getElementById('email-input');

    const errorMessage = document.getElementById('error-message');

    const emailReg = /@/g;

    if(!emailReg.test(emailInput.value)) {
        errorMessage.style.display = 'block';
        emailInput.style.borderColor = 'red';
    } else {
        errorMessage.style.display = 'none';
    }
}