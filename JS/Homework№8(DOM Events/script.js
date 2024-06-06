//<----- 1

let textArea = document.querySelector(".textArea")
let boxText = document.querySelector(".textUpload")
textArea.hidden = true

document.body.addEventListener("keydown", (e) => {

    if(e.ctrlKey === true && e.code == "KeyE") {

        e.preventDefault()
        boxText.hidden = true
        textArea.hidden = false
        textArea.value = boxText.textContent

    } else if(e.ctrlKey === true && e.code == "KeyS") {

        e.preventDefault()
        boxText.hidden = false
        boxText.innerHTML = textArea.value
        textArea.hidden = true

    }
})

//<----- 2

let table = document.querySelector(".table")

function sortTable(table,columnIndex) {

    const rows = Array.from(table.rows).slice(1)
    const isNumberCell = !isNaN(parseInt(rows[0].cells[columnIndex].textContent))

    rows.sort((a,b) => {
        const previousCell = a.cells[columnIndex].textContent
        const nextCell = b.cells[columnIndex].textContent
        return isNumberCell 
        ? parseInt(previousCell) - parseInt(nextCell) 
        : previousCell.localeCompare(nextCell)
    })

    table.append(...rows)
}

table.firstElementChild.addEventListener("click", (e) => {
    if(e.target.closest("th")) {
        sortTable(table, e.target.cellIndex)
    }
})

// <----- 3

let resizeCorner = document.querySelector(".corner")
resizeCorner.addEventListener("mousedown", resize)

function resize() {
    let container = this.parentNode

    const resize = function (e) {
        container.style.width = e.clientX - container.offsetLeft + "px"
        container.style.height = e.clientY - container.offsetTop + "px"
    }

    document.addEventListener("mousemove", resize)

    document.addEventListener("mouseup", function() {
        document.removeEventListener("mousemove", resize)
    })
}