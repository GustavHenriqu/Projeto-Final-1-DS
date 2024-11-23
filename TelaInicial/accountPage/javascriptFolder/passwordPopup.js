const button = document.querySelector("#pass-edit")
const popupContainer = document.querySelector("#pass-popup");
const siteContainer = document.querySelector(".site-container");
const closeButton = document.querySelectorAll(".close-button");
const eyeButton = document.querySelectorAll(".input-bo img");
let passStage = "invisible";

button.addEventListener("click", function () {
 popupContainer.style.display = "block"
    setTimeout(() => {
        popupContainer.classList.toggle("open")
        siteContainer.classList.toggle("blur");
  
    }, 10);


})

closeButton.forEach(currentButton => {
    currentButton.addEventListener("click", function () {
        currentButton.parentElement.classList.remove("open");
        
        siteContainer.classList.remove("blur");

        setTimeout(() => {
            currentButton.parentElement.style.display = "none";
      
        }, 300);
    
    })
})



eyeButton.forEach(currentButton => {
    currentButton.addEventListener("click", function () {

        if (passStage == "invisible") {
            passStage = "visible";
            currentButton.src = "https://jonbet.com/static/media/view-pwd.c9f3d0c0.svg"
            currentButton.style.height = "25px"
        }
        else if (passStage == "visible") {
            passStage = "invisible";
            currentButton.src = "https://jonbet.com/static/media/eye.fdf3ae46.svg"
            currentButton.style.height = "20px"

        }
    })
})

