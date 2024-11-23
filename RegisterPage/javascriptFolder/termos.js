const registerButton = document.querySelector(".enviar-button");
registerButton.disabled = true;



const termsInput = document.querySelector("#check-box");



termsInput.addEventListener('change', function() {
    if(this.checked) {
        registerButton.disabled = false;
    }

    else {
        registerButton.disabled = true;
    }
})

