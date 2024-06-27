let burger = document.querySelector(".burger")

burger.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active")

    let menu = document.querySelector(".header__menu")

    menu.classList.toggle("active-menu")

    document.firstElementChild.classList.toggle("hidden-y")
})

let menu = document.querySelector(".header__menu")

menu.addEventListener("click", (e) => {

   if(e.target.tagName) {
    menu.classList.remove("active-menu")
    burger.classList.remove("active")
    document.firstElementChild.classList.remove("hidden-y")
   }

})