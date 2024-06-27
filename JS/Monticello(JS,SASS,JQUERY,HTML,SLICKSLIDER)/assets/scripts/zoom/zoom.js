let galleryBox = document.querySelector(".gallery__box")

galleryBox.addEventListener("click", (e) => {
    if(e.target.classList.value == "gallery__zoom" || e.target.tagName == "svg") {
        let boxForView = document.createElement("div")
        boxForView.style.width = "100vw"
        boxForView.style.height = "100vh"
        boxForView.style.backgroundColor = "black"
        boxForView.style.opacity = ".5"
        boxForView.style.position = "absolute"
        boxForView.style.top = "0"
        boxForView.style.left = "0"

        let gallary = document.querySelector(".gallery")
        gallary.appendChild(boxForView)
    }
})

