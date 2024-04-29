alert('Привіт')
let whatName = prompt('Як тебе звати?')
alert(`Привіт, ${whatName}`)
let yourAge = prompt('Скажи рік свого народження ?');
let CURRENT_YEAR = 2024;
let age = CURRENT_YEAR - yourAge;
alert(`Тобі, ${age}`)
let cube = prompt('Яка довжина, однієї сторони квадрату ?')
const CUBE_PERUMETR = cube * 4;
alert(`Периметр квадрату, ${CUBE_PERUMETR}см`)
let radius = prompt('Введіть радіус кола?')
const PLOHA_CIRCLE = 3.14 * (radius * 2);
alert(`Площа кола становить ${PLOHA_CIRCLE}`)
let distance = prompt('Яка відстань між двома містами ?')
let time = prompt('За скільки годин ви хочете дістатися, з точки А в точку Б?')
const SPEED = distance / time;
alert(`Швидкість з якою ви будете рухатися, становить ${SPEED}км/год`)
let dollars = prompt(`Ведіть, скіль би ви хотіли перевести $ в €?`)
const EVRO = 0.93445;
const DOLLAR_EVRO = dollars * EVRO;
alert(`Ви придбали ${DOLLAR_EVRO}€! Дякуємо`)

let alertConfirm = confirm(`
Ваша історія.
Ім'я: ${whatName};
Вік: ${age};
Периметр квадрату: ${CUBE_PERUMETR}см;
Площа кола: ${PLOHA_CIRCLE};
Необхідна швидкість, для 
подолання відстані в ${distance}км за ${time}г : ${SPEED}км/год;
Кількість придбаних євро: ${DOLLAR_EVRO}€;
`)
