function addDomain(domain) {
    // Pegando o valor atual do campo de email
    let emailInput = document.getElementById('email-input');
    let emailValue = emailInput.value;

    // Remover qualquer domínio existente
    emailValue = emailValue.replace(/@[\w.]+$/, '');

    // Adiciona o novo domínio
    emailInput.value = emailValue + domain;
    
}
