let accountButton = document.querySelector(".img-button");
let profileContainer = document.querySelector(".accout-profile");

accountButton.addEventListener("click", function() {

    
    profileContainer.style.display = "block"

    setTimeout(() => {   
    profileContainer.classList.toggle("loggedOpen");
          }, 1); 

 
})