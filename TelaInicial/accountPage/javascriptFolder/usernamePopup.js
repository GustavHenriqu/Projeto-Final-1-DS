const userButton = document.querySelector("#username-edit")
const popup = document.querySelector("#username-popup");
const site = document.querySelector(".site-container");
const saveButton = document.querySelector("#username-enviar");
const usernameInput = document.querySelector("#user-input");
const usernameLabel = document.querySelector("#username-text");



userButton.addEventListener("click", function () {
    popup.style.display = "block"
    setTimeout(() => {
        popup.classList.toggle("open")
        site.classList.toggle("blur");
  
    }, 10);

})

saveButton.addEventListener("click", function() {
    popup.classList.remove("open");
    siteContainer.classList.remove("blur");
    usernameLabel.textContent = usernameInput.value;

    setTimeout(() => {
       popup.style.display = "none";
  
    }, 300);
    
})





