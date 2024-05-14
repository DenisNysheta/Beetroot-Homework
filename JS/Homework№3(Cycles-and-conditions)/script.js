// Min

//1 Дізнатися вік у користувача і визначити кто він

const USER_AGE = prompt("Скільки вам років?")

if (USER_AGE <= 11) {
    confirm('Ви дитина')
} else if (USER_AGE <= 17) {
    confirm('Ви підліток')
} else if (USER_AGE <= 59) {
    confirm('Ви дорослий')
} else if (USER_AGE >= 60 ) {
    confirm('Ви пенсіонер')
} else {
    confirm('Перепрошую ваші данні не співпадають з очікуванною відповідью')
}

// 2 Спецсимволи в діапазоні від 0-9

const NUMBER_USER = prompt('Введіть будь ласка число від 0-9')

switch(NUMBER_USER) {
    case "1":
        confirm(`${NUMBER_USER}-!`)
        break    
    ;
    case "2":
        confirm(`${NUMBER_USER}-@`)
        break    
    ;
    case "3":
        confirm(`${NUMBER_USER}-#`)
        break    
    ;
    case "4":
        confirm(`${NUMBER_USER}-$`)
        break    
    ;
    case "5":
        confirm(`${NUMBER_USER}-%`)
        break    
    ;
    case "6":
        confirm(`${NUMBER_USER}-^`)
        break    
    ;
    case "7":
        confirm(`${NUMBER_USER}-&`)
        break    
    ;
    case "8":
        confirm(`${NUMBER_USER}-*`)
        break    
    ;
    case "9":
        confirm(`${NUMBER_USER}-(`)
        break    
    ;
    case "0":
        confirm(`${NUMBER_USER}-)`)
        break    
    ;
    default :
        alert(`Вибачте але ваш символ ${NUMBER_USER} невідповідає
        наданному списку елементів
        `)
    ;
}

// 3 Суму всіх чисел в діапазоні

let startDiapazon = parseInt(prompt("Введіть початок діапазону"))
let endDiapazon = parseInt(prompt("Введіть кінець діапазону"))
let sumAll = 0

for (let i = startDiapazon; i <= endDiapazon; i++) {
    sumAll += i
    console.log(sumAll)
}

confirm(`Сумма всіх чисел в діапазоні від ${startDiapazon} до ${endDiapazon} , дорівнює ${sumAll}`)
// 4 Найбільший спільний дільник серед двох чисел

let firstNumber = Number(prompt('Ввкажіть перше число, для знаходження найбільшого спільного дільника'))
let secondNumber = Number(prompt('Ввкажіть друге число, для знаходження найбільшого спільного дільника'))
const NUMBERS = []

for (let i = 0; i < secondNumber; i++) {

    if (firstNumber % i === 0 && secondNumber % i === 0) {
       NUMBERS.push(i)
    }

}

let moreDilnik = NUMBERS.pop()
alert(`Найбільшим спільеим дільником серед вказаних вами чисел буде ( ${moreDilnik} )`)

// 5 Вивести всі дільники числа

let number = Number(prompt("Введіть своє число для знаходження його дільників"))
let dilniki = []

for (let i = 0; i < number; i++) {

    if (number % i === 0) {
       dilniki.push(i)
    } 

}

alert(`Всі дільники числа ${number}, ${dilniki}`)

// Norma

// 1 Palindrom

let wordForCheck = prompt("Введіть своє число або слово для перевірки на паліндром")

if (wordForCheck.toLowerCase() === wordForCheck.toLowerCase().split('').reverse('').join('')) {

    confirm(`Ваше значення ${wordForCheck} є паліндромом `)

} else {

    confirm(`Ваше значення ${wordForCheck} не є паліндромом спробуйте задати інше значення`)

}

// 2 Сумма зі знижкою

let sum = Number(prompt('Введіт сумму на яку б ви бажали скупитися'))

if(sum !== String()) {

    if(sum <= 300) {
        let diskount1 = ((sum * 3) / 100)
        let sumWithDiskount1 = sum - diskount1
        confirm(`Ваша сумма ${sum}грн зі знижкою в 3%, становить ${sumWithDiskount1}`)

    } 

    else if( sum <= 500) {
        let diskount2 = ((sum * 5) / 100)
        let sumWithDiskount2 = sum - diskount2
        confirm(`Ваша сумма ${sum}грн зі знижкою в 5%, становить ${sumWithDiskount2}`)

    } 
    

    else if(sum <= 500 || sum >= 500) {
        let diskount3 = ((sum * 7) / 100)
        let sumWithDiskount3 = sum - diskount3
        confirm(`Ваша сумма ${sum}грн зі знижкою в 7%, становить ${sumWithDiskount3}`)

    } 

    else {
        confirm('Перепрошуємо але ваша сумма не співпадає з очікуванним введенням')

    }
    
}

// 3 Запитати у користувача 10 чисел

let numbers = prompt('Введіть будь ласка символи в діапазоні до 10 (по вашому бажанню)');
let numbersMassive = numbers.split(",")
let newMassive = []

for (let i = 0; i < numbersMassive.length; i++) {

      if (numbersMassive[i] > 0 && numbersMassive[i] % 2 === 0) {

        newMassive.push(String(` (${numbersMassive[i]}) - є додатнім та парним`))

    } else if (numbersMassive[i] < 0 && numbersMassive[i] % 2 === -0) {

        newMassive.push(String(` (${numbersMassive[i]}) - є від'ємни і парним`))
        
    } else if (numbersMassive[i] > 0 && numbersMassive[i] % 2 !== 0) {
         
        newMassive.push(String(` (${numbersMassive[i]}) - є додатнім але не парним`))

    } else if (numbersMassive[i] < 0 && numbersMassive[i] % 2 !== -0) {
        
        newMassive.push(String(` (${numbersMassive[i]}) - є від'ємни та не парним`))

    }
    
}

if (newMassive.length > 0) {

    confirm(`${newMassive}  
    ваш список символів`)

} else {

    alert('Ви нічого не ввели')

}

// 4 Відображення днів тиждня

for (let i = 0; i <= 7; i++) {
    switch(i) {
        case 1:
            confirm("Понеділок. Хочеш побачити наступний день?")
            break
        ;
        case 2:
            confirm("Вівторок. Хочеш побачити наступний день?")
            break
        ;
        case 3:
            confirm("Середа. Хочеш побачити наступний день?")
            break
        ;
        case 4:
            confirm("Четверг. Хочеш побачити наступний день?")
            break
        ;
        case 5:
            confirm("П'ятниця. Хочеш побачити наступний день?")
            break
        ;
        case 6:
            confirm("Суббота. Хочеш побачити наступний день?")
            break
        ;
        case 7:
            confirm("Неділя. Хочеш побачити наступний день?")
           break     
        ;
    }
}

// Max

// 1 Намагався дещо розібратися але не подужав 


// 2 вивести таблицю множення вшд 2 до 9

let results = []

for (let i = 2; i <= 9; i++ ) {
    
    for (let j = 1; j <= 10; j++ ) {
        let x = i * j
        results.push(`${i} * ${j} = ${x} `)
    }

}

alert(`Таблиця множення від 2 до 9
${results}
`)

// 3 Запитай дату (день, місяць, рік) і виведи наступну за нею дату

let dayDate = Number(prompt('Назвіть будь ласка день місяця (число)'))
let monthDate = prompt('Назвіть будь ласка місяць (число)')
let yearDate = prompt('Назвіть будь ласка рік (число)')

if (dayDate <= 31) {
    let date = new Date(`${yearDate}` + " " + `${monthDate}` + " "  + `${dayDate + 1}`)
    date = date.toDateString()
    alert(date)
} 

