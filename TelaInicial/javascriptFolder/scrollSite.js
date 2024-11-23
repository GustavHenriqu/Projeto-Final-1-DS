const trigger = document.querySelector(".selected-link");
const target = document.querySelector("#target");

// Adiciona um evento de clique
trigger.addEventListener('click', () => {
    // Rola até o elemento alvo
    target.scrollIntoView({ behavior: 'smooth' });
});