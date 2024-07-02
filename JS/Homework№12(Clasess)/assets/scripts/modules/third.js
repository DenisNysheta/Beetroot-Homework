// 3
// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.

// Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку. 
// Масив працівників необхідно передавати через конструктор, а отримувати HTML-код за допомогою методу getHtml ().

// Створи об’єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().
let listEmps = []

class Employee {
    constructor(name,age,male) {
        this.name = name
        this.age = age
        this.male = male
    }
}

let first = new Employee("Denis", 20, "male")
let second = new Employee("Margaret", 35, "female")
let third = new Employee("Victoria", 23, "female")

listEmps.push(first,second,third)

class EmpTable {
    constructor(list) {
        this.list = list
    }

    getHtml() {
        let table = document.querySelector(".list")
        
        if(Array.isArray(this.list)) {
            this.list.forEach(item => {
                let li = document.createElement("div")

                li.innerHTML =  `
                    <li><span>Name: ${item.name}</span><span>Age: ${item.age}</span><span>Sex: ${item.male}</span></li
                `
                table.appendChild(li)
            });
        }

    }
}

let listTable = new EmpTable(listEmps)
listTable.getHtml()