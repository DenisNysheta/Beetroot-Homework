// Min

// 1 Створи об'єкт, що описує автомобіль
//  (виробник, модель, рік випуску, середня швидкість)
//  (обсяг паливного баку, середня витрата палива на 100 км., водії), 
// і наступні методи для роботи з цим об'єктом:
//-- Метод, який виводить на екран інформацію про автомобіль.
//-- Додавання ім’я водія у список
//-- Перевірка водія на наявність його ім’я у списку
//-- Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let array = []
const car = {
    
  'Країна виробник':"BMW",
  Модель:"M5",
  Бензобак: '40л',
  'Середня витрата палива на 100км': '8л',
  Власники:[],
    
  infoAboutCar: function () {

      for (let key in car) {

        typeof car[key] !== 'function' ? array.push(`
        ${key}  `, car[key]) : false
       
      }
      alert(array)
  },
// Метод для додавання водія в список
  addDriver: function (nameDriver) {
    isNaN(nameDriver) ? car.Власники.push(`${nameDriver}`) : false
  },
// Метод для ім'я водія в списку власників 
  isYourCar: function (nameDriver) {
    car.Власники.includes(nameDriver) ? alert("Так ваше ім'я, присутнє в списку") : alert("Вибачте, але вашого ім'я немає")
  },
// Метод для вирахування необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю
  sumTimePatrolDistance: function() {
      let distance = parseInt(prompt('Ввкажіть дистанцію для подалання'));
      let time = parseInt(prompt('Ввкажіть необхідний час'));
      let relax = 4;
      let averageSpeed = Math.round(distance / time);
      let needTime = Math.round((time / relax) + time)
      let patrol = (distance / 100) * parseInt(car["Середня витрата палива на 100км"])
      let info = `Для подолання в ${distance}км , за ${time}год , з середньою швидкостью автомобіля ${averageSpeed}. Необхідно ${patrol}л палива, та ${needTime}год`
      alert(info)
  }

}

// <---> Виклики функцій для перевірки
// let isDriverCar = prompt("Ввкажіть ваше ім'я для перевірки, в списку власників автомобіля")

// car.addDriver("Denis")
// car.isYourCar(isDriverCar)
// car.infoAboutCar()
// car.sumTimePatrolDistance()
// <--->

// Norma 
// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, 
// може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд,
// то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити
// можливість того що користувач може передати 150 секунд, або 75 хвилин.

const timeObj = {
  hours:20,
  minutes:52,
  seconds:33,
  informationTime: new Date(),

  timeInfo: function () {
    let info = this.informationTime
    let hours = info.getHours()
    let minutes = info.getMinutes()
    let seconds = info.getSeconds()
    alert(`На данний момент, час становить ${hours}:${minutes}:${seconds}`)
  },

  changeTimeSeconds() {
   let time = this.informationTime
   let secondsChange = this.informationTime.setSeconds(Number(prompt('Ввкажіть кількість секунд для зміни часу')))
   let hours = time.getHours()
   let minutes = time.getMinutes()
   let seconds = time.getSeconds()
   alert(`Зі змінною секунд, час становить ${hours}:${minutes}:${seconds}`)
   return secondsChange
  },

  changeTimeMinutes() {
   let time = this.informationTime
   let minutesChange = this.informationTime.setMinutes(Number(prompt('Ввкажіть кількість хвилин для зміни часу')))
   let hours = time.getHours()
   let minutes = time.getMinutes()
   let seconds = time.getSeconds()
   alert(`Зі змінною хвилин, час становить ${hours}:${minutes}:${seconds}`)
   return minutesChange
  },

  changeTimeHours() {
   let time = this.informationTime
   let hoursChange = this.informationTime.setHours(Number(prompt('Ввкажіть кількість годин для зміни часу')))
   let hours = time.getHours()
   let minutes = time.getMinutes()
   let seconds = time.getSeconds()
   alert(`Зі змінною годин, час становить ${hours}:${minutes}:${seconds}`)
   return hoursChange
  }

}

// <---> Виклики функцій для перевірки
// timeObj.timeInfo()
// timeObj.changeTimeHours()
// timeObj.changeTimeMinutes()
// timeObj.changeTimeSeconds()
// timeObj.timeInfo()
// <--->


// 3 
/*
Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
1 Складання 2-х об'єктів-дробів.
2 Віднімання 2-х об'єктів-дробів.
3 Множення 2-х об'єктів-дробів.
4 Ділення 2-х об'єктів-дробів.
5 Скорочення об'єкта-дробу.
*/