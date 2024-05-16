// Min

// 1 Напиши всі можливі варіанти створення функцій.

// Function declaration

function isNum (arguments) {
    actions
}

// Function expression

let func = function (arguments) {
    actions
}

// Arrow function

let arrow = (arguments) => {
    actions
}

// 2 Створи функцію, яка буде виводити кількість переданих їй аргументів.


function manyArguments(...str) {
    let x = str.length
    alert(`Кількість переданих аргументів в функцію становить ${x}`)
}

// manyArguments()

// 3 Напиши функцію, яка приймає 2 числа 

let first = Number(prompt('Вкажіть перше число для порівняння с другим'))
let second = Number(prompt('Вкажіть друге число для порівняння с першим'))

let returnNumbers = (first,second) => {
    if (first < second)  {

        alert(`-1, тому що ${first} менше, ніж ${second}`)
        
    } else if (first > second) {

        alert(`1, тому що ${first} більше, ніж ${second}`)

    } else if (first == second) {

        alert(`0, тому що ${first} і ${second} рівні`)

    }
} 

returnNumbers(first,second)

// 4 Вирахування факторіалу числа

let numberForFactorial = Number(prompt('Ввкажіть будь ласка число вирахування факторіалу числа'))
factirialNumber(numberForFactorial)

function factirialNumber(number) {

    let result = 1

    for(let i = 1; i <= number; i++) {

        result *= i
        console.log(result)

    }

    confirm(`Факторіал числа ${number} становить ${result}`)
}

// 5 Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число

let firstInOne = prompt('Вкажіть перше число для його перетворення в одне ціле з іншими числами') 
let secondInOne = prompt('Вкажіть друге число для його перетворення в одне ціле з іншими числами')
let thirdInOne = prompt('Вкажіть третє число для його перетворення в одне ціле з іншими числами')


const sumThreeNumbers = function(first,second,third) {
    let sum = Number(first + second + third)
    alert(`Вказані числа створюють єдине число ${sum}`) 
}

sumThreeNumbers(firstInOne,secondInOne,thirdInOne)

// // 6 Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

const FIRST = Number(prompt('Введіть перший параметр'))
const SECOND = Number(prompt('Введіть другий параметр'))


let plohaSquareOrUpright = (first,...second) => {

    if (first && second) {
        let ploha = first * second
        alert(`Площа прямокутника ${ploha}`)

    } else if (second) {
        let ploha = Math.pow(second,2)
        alert(`Площа квадрата ${ploha}`)

    }

}

plohaSquareOrUpright(FIRST,SECOND)

// Max 

// 1 Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”


function isNumberDosconale (n) {
    let sum = 0
    
    for (let i = 0; i < n; i++) {

        switch (n % i === 0) {

            case true:
                sum += i
                break
            ;

        }
        
    }
    
    return sum === n    
}

let numberUserDoskonale = Number(prompt("Ввкажіть ваше  число для перевірки на досконалість"))

if (isNumberDosconale(numberUserDoskonale)) {

    alert(`Ваше число ${numberUserDoskonale} є досконалим`)

} else {

    alert(`Ваше число ${numberUserDoskonale} не є досконалим`)

}


// 2 Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, які є досконалими

let firstDiapazon = Number(prompt('Ввкажіть будь ласка перше число діапазону, для пошуку ідеальних чисел'))
let secondDiapazon = Number(prompt('Ввкажіть будь ласка друге число діапазону, для пошуку ідеальних чисел'))
let sumDiapazon = [];

function isNumbers(first, second) {

    for (let i = first; i <= second;i++) {

        if (Boolean(isNumberDosconale(i)) === true) {

            sumDiapazon.push(i)
            
        } 
        
    }
    
    alert(`З вказаного діапазону лише ${sumDiapazon} є досконалими`)
}

isNumbers(firstDiapazon, secondDiapazon)

