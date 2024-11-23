const ButtonEdit = document.querySelector("#tel-edit")
const PopupContainer = document.querySelector("#tel-popup");
const containerSite = document.querySelector(".site-container");
const buttonSave = document.querySelector("#tel-enviar");
const telLabel = document.querySelector("#tel-text");
const telInput = document.querySelector("#tel-input");



ButtonEdit.addEventListener("click", function () {
    PopupContainer.style.display = "block"
    setTimeout(() => {
        PopupContainer.classList.toggle("open")
        containerSite.classList.toggle("blur");
  
    }, 10);

})

buttonSave.addEventListener("click", function() {
    PopupContainer.classList.remove("open");
    containerSite.classList.remove("blur");
    telLabel.textContent = "+55 " +  telInput.value.slice(0, -4) + "-" + telInput.value.slice(-4);

   

    setTimeout(() => {
       PopupContainer.style.display = "none";
  
    }, 300);
    
})

telInput.addEventListener('input', function (event) {

    this.value = this.value.replace(/[^0-9()]/g, '');
  });





