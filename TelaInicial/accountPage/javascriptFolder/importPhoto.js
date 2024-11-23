const img = document.querySelectorAll(".account-img");
const file = document.querySelector("#file")
const uploadButton = document.querySelector("#upload-btn");
const deleteButton = document.querySelector(".delete-button")



file.addEventListener('change', function() {
    const chosedFile = this.files[0];

    if(chosedFile) {
        const reader = new FileReader();
        img.forEach(currentImg => {
            reader.addEventListener( 'load', function() {
                currentImg.setAttribute('src', reader.result);
        })

       
        })
        reader.readAsDataURL (chosedFile)
    }
})

deleteButton.addEventListener("click", function() {
    img.forEach(currentImg => {   
         currentImg.src = "./images/defaultAccount.png";

    })
})