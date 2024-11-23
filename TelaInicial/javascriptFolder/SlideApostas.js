const Allwrapper = document.querySelectorAll(".cards-container");




Allwrapper.forEach(wrapper => {

    const firstCard = wrapper.querySelectorAll(".card") [0];
    arrowIcons = document.querySelectorAll(".tst");

    let isDragStart = false, prevPageX, prevScrollLeft;
    let positionDiff
    let isDragging = false

    const showHideIcons = () => {
        let scrollWidth = wrapper.scrollWidth - wrapper.clientWidth;
        arrowIcons[0].style.display = wrapper.scrollLeft == 0 ? "none" : "block";
        arrowIcons[1].style.display = wrapper.scrollLeft == scrollWidth ? "none" : "block";
        }
        
        
        arrowIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                let firstImgWidth = firstCard.clientWidth + 20;
                wrapper.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
                setTimeout( () => showHideIcons(), 60)
            })
        });
        
        const autoSlide = () => {
             if(wrapper.scrollLeft == (wrapper.scrollWidth - wrapper.clientWidth)) return;
        
            positionDiff = Math.abs(positionDiff);
            let firstImgWidth = firstCard.clientWidth + 20;
        
            let valDiferrence = firstImgWidth - positionDiff;
        
            if(wrapper.scrollLeft > prevScrollLeft) {
                return wrapper.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiferrence : -positionDiff
            }
        
            wrapper.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiferrence : -positionDiff;
        
        }
        
        const dragStart = (e) => {
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = wrapper.scrollLeft
        }
        
        const dragging = (e) => {
            if(!isDragStart) return;
            e.preventDefault()
            isDragging = true;
            wrapper.classList.add("dragging")
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            wrapper.scrollLeft = prevScrollLeft - positionDiff
            showHideIcons()
        }
        
        const dragStop = () => {
            isDragStart = false;
            wrapper.classList.remove("dragging")
             
            if(!isDragging) return;
            isDragging = false;
        
            autoSlide();
        }
        
        wrapper.addEventListener("mousedown", dragStart)
        wrapper.addEventListener("touchstart", dragStart)
        
        wrapper.addEventListener("mousemove", dragging)
        wrapper.addEventListener("touchmove", dragging)
        
        wrapper.addEventListener("mouseup", dragStop)
        wrapper.addEventListener("mouseleave", dragStop)
        wrapper.addEventListener("touchend", dragStop)

})



