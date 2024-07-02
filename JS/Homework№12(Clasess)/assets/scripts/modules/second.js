// 2
// Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
// 
// поле, яке зберігає колір маркера;
// поле, яке зберігає кількість чорнил у маркері (у відсотках);
// метод для вводу (приймає рядок і виводить текст відповідним кольором; 
// текст виводиться доти, доки в маркері є чорнило; один не пробільний символ — це 0,5 % чорнил у маркері).
// Реалізуй клас, що описує маркер, який можна перезаправляти. Успадкуй цей клас від простого маркера й додай метод для заправки.

class StationeryMarker {
    constructor(color, quantityInt) {
        this.color = color
        this.quantityInt = quantityInt
    }

    writeWithMarket() {
        let text = document.querySelector(".text-marker")
        let inputText = document.querySelector(".text")
        

        if(inputText.value == "") {
            text.innerHTML = "Write please text"

        } else {
            text.innerHTML = ""
            let trims = 0 
            let value = inputText.value.split("")
            
            for(let letter of value) {
                if(letter == " ") {
                    trims += 1
                }
            }
            
            let quantitySymbols = this.quantityInt * 2; 

            let textDone = []

            for(let i = 0; i < quantitySymbols + trims; i++) {
                textDone.push(inputText.value.split("")[i])
            }

            text.textContent = textDone.join("")
        }
        
        return function() {
            let inputColor = document.querySelector(".color")
            text.style.color = ""
            text.style.color = inputColor.value
        }
    }
}

class Marker extends StationeryMarker {
    constructor(color,quantityInt) {
        super(color,quantityInt)
    }

    addQuantity(value) {
        this.quantityInt = value
        return this.quantityInt
    }
    
}

let writeText = document.querySelector(".set-text")
let changeColor = document.querySelector(".set-color")

writeText.addEventListener("click", () => {
    let quantityInput = document.querySelector(".set-quantity")
    let marker = new Marker("red",quantityInput.value)

    marker.writeWithMarket()
    marker.addQuantity(quantityInput.value)

    changeColor.addEventListener("click", () => {
        let change = marker.writeWithMarket()
        change()
    })
})