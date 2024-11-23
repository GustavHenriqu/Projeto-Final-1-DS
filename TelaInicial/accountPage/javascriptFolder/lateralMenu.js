const openMenuButton = document.querySelector(".open-menu ");
const lateralMenu = document.querySelector(".lateral-navigation");
const closeMenuButton = document.querySelector(".back-button")


openMenuButton.addEventListener("click", function() {
lateralMenu.style.display = "block"

setTimeout(() => {
    lateralMenu.classList.toggle("open")
}, 10)


})


closeMenuButton.addEventListener("click", function() {
    lateralMenu.classList.remove("open")
    setTimeout(() => {
        lateralMenu.style.display = "none"
    }, 300)
})