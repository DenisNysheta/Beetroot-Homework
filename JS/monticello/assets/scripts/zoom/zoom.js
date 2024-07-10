let galleryBox = document.querySelector(".gallery__box")

let srcImg;

galleryBox.addEventListener("click", (e) => {
    if(e.target.classList.value == "gallery__zoom") {
        let boxForView = document.createElement("div")
        boxForView.style.width = "100vw"
        boxForView.style.height = "112vh"
        boxForView.style.opacity = "1"
        boxForView.style.position = "absolute"
        boxForView.style.top = "0"
        boxForView.style.left = "0"
        boxForView.classList.add("zoom")
        let srcForImg = e.target.nextElementSibling.src

        boxForView.innerHTML = `
            <div class="zoom-wrapper">
                <div class="zoom-background"></div>
                <div class="back-img">
                    <img style="width:600px" src="${srcForImg}" alt="" class="zoom-image"/>
                </div>
                <button class="zoom-btn">Close</button>
            </div>
        `

        let gallary = document.querySelector(".gallery")
        gallary.appendChild(boxForView)

    } else if (e.target.tagName == "svg") {
        let boxForView = document.createElement("div")
        boxForView.style.width = "100vw"
        boxForView.style.height = "112vh"
        boxForView.style.opacity = "1"
        boxForView.style.position = "absolute"
        boxForView.style.top = "0"
        boxForView.style.left = "0"
        boxForView.classList.add("zoom")
        // console.log(e.target.parentElement.nextElementSibling.src)
        let srcForImg = e.target.parentElement.nextElementSibling.src

        boxForView.innerHTML = `
        <div class="zoom-wrapper">
            <div class="zoom-background"></div>
            <div class="back-img">
                <img style="width:600px" src="${srcForImg}" alt="" class="zoom-image"/>
            </div>
            <button class="zoom-btn">Close</button>
        </div>
    `

    let gallary = document.querySelector(".gallery")
    gallary.appendChild(boxForView)
    }
})

let btnClose = document.querySelector(".zoom-btn")

document.body.addEventListener("click", (e) => {
   if(e.target.classList.value == "zoom-btn") {
        e.target.parentElement.parentElement.remove()
   }
})

let box = document.querySelector(".mapboxgl-marker")

box.firstElementChild.remove()
box.lastElementChild.remove()
box.classList.add("castom-marker")