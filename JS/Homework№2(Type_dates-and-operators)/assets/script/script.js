// Min

// 1
let firstOperand = 0.1;
let secondOperand = 0.2;

let rezultFixed = firstOperand + secondOperand;
console.log(rezultFixed.toFixed(1))

//  2
let stringNumber = "1";
let numberNumber = 2;

let rezult = Number(stringNumber) + numberNumber
console.log(rezult)

// 3

const SIZE_FILE = 820;
let gigabyteUser = prompt('Скільки би ви хотіли мати ГБ на вашій флешці?')
let userGb = Math.round((gigabyteUser * 1000 / 1.024) / SIZE_FILE);
let rezultCount = confirm(`На вашій флешці поміститься ${userGb} кількість файлів обсягом 820мб`)

// Norma 

// 1
let money = prompt("Введіть кількість грошей");
let cost = prompt("Скільки буде коштувати ваша шоколадка?");
let reminder = money % cost;
let reallyMoney = money - reminder;
let stayedMoney = confirm(`У вас залишеться на кармані ${reminder}, і зможете придбати ${reallyMoney / cost} шоколадок`)

// 2

let numberForReplace = prompt('Введіть своє число будь ласка');
let rezultReplace = confirm(`Ось ваша цифра в іншому порядку ${Number(numberForReplace.charAt(2) + numberForReplace.charAt(1) + numberForReplace.charAt(0))}`);  

// Max

// 2

let firstTask = 2 && 0 && 3;//Поверне 0 так як, з усіх чисел лише 0 рівняється false
let secondTask = 2 || 0 || 3;//Поверне 2, так як він перший зустрічається в виразі, і відразу ловиться значення true
let thirdTask = 2 && 0 || 3;//Поверне 3, так як в першому виразі де 2 && 0 - вертається 0, a вже потім при 0 || 3 вернеться 3
