/*В HTML-сторінці додати користувачу можливість створювати свій дашборд годинників. 
Це годинники для різних куточків світу. Необхідно додати input-поле та button, 
у разі кліка на якому буде створюватися новий годинник. Реалізація WorldClock 
відбувається через class. Кожен екземпляр такого класу — новий годинник. У класі повинні бути такі компоненти:

      1 getCurrentDate
      2 getCurrentDateTime
      3 deleteClock
       
       
      
     1 кнопка — показує користувачу час у текстовому варіанті
     2 кнопка — показує користувачу поточну дату й час у текстовому варіанті
     3 кнопка — видаляє годинник зі «стіни» годинників*/


let btnAddClock = document.querySelector(".time__add")
let listClocks = document.querySelector(".clock__list")
/* <====Listener for add zones in input====> */
// 
document.body.addEventListener("click", (e) => {
      let li = e.target 
      let input = document.getElementById("time-zones")

      if(li.classList.value == "time__zone") {
            let timeZone = li.textContent 
            input.value = timeZone
      }
})


/* <==== Class Clock ====> */
// 
class WorldClock {
    constructor(zone) {
      this.zone = zone
      this.date = new Date()
    }

    getCurrentDate() {
      return this.date.toLocaleDateString("en-US",{timeZone:this.zone})
    }

    getCurrentDateTime() {
      return this.date.toLocaleTimeString("en-US",{timeZone:this.zone})
    }

    deleteClock(clock) {
      clock.style.opacity = "0"
      setTimeout(() => {
            clock.remove()
      },1000)
    }

}

/* <==== Listener for btn that add new clock ====> */
// 
btnAddClock.addEventListener("click", () => {
      let inputDateZone = document.getElementById("time-zones")
      let listClocks = document.querySelector(".clock__list")
      let listValueLi = document.querySelector(".time__list")
      let zones = []

      for(let i = 0; i < listValueLi.children.length; i++) {
            zones.push(listValueLi.children[i].textContent)
      }

      let valueForCheck = inputDateZone.value

      if(zones.includes(valueForCheck)) {
            let clock = document.createElement("div")
            clock.classList.add("clock__item")
            clock.dataset.timezone = inputDateZone.value
      
            clock.innerHTML = `
                  <div class="clock__dashboard">
                  </div>
                  <button class="btn-current-date">Get current date</button>
                  <button class="btn-current-time">Get current date time</button>
                  <button class="btn-delete">Delete clock</button>
            `
            let dashboard = clock.children[0]
            let btnDate = clock.children[1]
            let btnTime = clock.children[2]
            let btnDelete = clock.children[3]

            btnDate.addEventListener("click", (e) => {
                  let timeZone = e.currentTarget.parentElement.dataset.timezone
                  let date = new WorldClock(timeZone)
                  dashboard.innerHTML = date.getCurrentDate()
            })

            btnTime.addEventListener("click", (e) => {
                  let timeZone = e.currentTarget.parentElement.dataset.timezone
                  let time = new WorldClock(timeZone)
                  dashboard.innerHTML = time.getCurrentDateTime()
            })

            btnDelete.addEventListener("click", (e) => {
                  let time = new WorldClock()
                  time.deleteClock(e.currentTarget.parentElement)
            })
            
            listClocks.appendChild(clock)
            setTimeout(() => {
                  clock.style.opacity = "1"
            },50)
      } else {
            alert("Sorry, but we can't find time zone")
      }

})
