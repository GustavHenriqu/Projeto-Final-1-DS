const cookiesButton = document.querySelectorAll(".cookies-button");

cookiesButton.forEach(button => {
    button.addEventListener("click", function() {

        button.parentElement.parentElement.style.opacity = "0";
   
        setTimeout(() => {
            button.parentElement.parentElement.style.display = "none"
          }, 1000); 
    
    })
})

