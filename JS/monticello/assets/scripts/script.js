import "./sliders/hero.js";
import "./burger/burger.js"
import "./sliders/news.js"
import "./zoom/zoom.js"

let form = document.querySelector(".form__contact__inputs")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let inputName = document.getElementById("name")
    let inputEmail = document.getElementById("email")

    let namePattern =  /^[a-z ,.'-]+$/i
    let emailPattern =  /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u

    // Validation for name

    if(namePattern.test(inputName.value)) {
        document.querySelector(".incorrect-name").style.display = "none"

    } else {
        let name = document.querySelector(".incorrect-name")
        name.style.display = "block"
        setTimeout(() => name.style.display = "none",2000)
    }

    // Validation for email

    if(emailPattern.test(inputEmail.value)) {
       document.querySelector(".incorrect-email").style.display = "none"
        
    } else {
        let email = document.querySelector(".incorrect-email")
        email.style.display = "block"
        setTimeout(() => email.style.display = "none",2000)
    }

    if(emailPattern.test(inputEmail.value) && namePattern.test(inputName.value)) {
        let correct = document.querySelector(".correct")
        correct.style.opacity = "1"
        setTimeout(() => correct.style.opacity = "0", 2000)
        setTimeout(() => {
            inputName.value = ""
            inputEmail.value = ""
        }, 2000)
    }

})

