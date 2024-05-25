var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"
    }
];

let list = document.createElement("ul")
document.body.prepend(list)

let box = document.createElement("div")
list.after(box)
box.style.display = "flex"
box.style.justifyContent = "space-around"

let modalka = document.createElement("div")
modalka.classList.add("modalka")
document.body.children[1].after(modalka)

let textModalka = document.createElement("p")
textModalka.innerText = "Hi, I`m modal window"
modalka.append(textModalka)

let listItem = playList.forEach((item) => {
    let li = document.createElement('li')
    li.innerHTML = `<p>Author: ${item.author}</p><p>Song: ${item.song}</p>`
    li.firstChild.classList.add("author")
    li.lastChild.classList.add("song")
    list.append(li)
})

const open = document.createElement("button")
open.classList.add("open")
open.innerText = 'Open'
open.addEventListener("click",() => {
    modalka.style.top = "0%"
})

const close = document.createElement("button")
close.classList.add("close")
close.innerText = 'Close'
box.append(open,close)
close.addEventListener("click",() => {
    modalka.style.top = "-100%"
})


let switchBtn = document.querySelector(".changeColor")
let lights = document.querySelectorAll('.light')
let cur = 0

switchBtn.addEventListener("click", () => {
    lights[cur].classList.remove("active")
    cur = (cur + 1) % lights.length;
    lights[cur].classList.add("active")
})