// 1
/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту,
 кількість і куплений він чи ні, ціну за одиницю товару, сума. 
 Написати кілька функцій для роботи з таким масивом:
 1 Виводити весь список на екран таким чином, щоб спочатку 
  йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
 2 Покупка продукту. Функція приймає 
  назву продукту і відзначає його як придбаний.*/

const listProducts = []

// Створив функцію яка повертає створенний об'єкт з полями необхідними

function createProduct(name,count,isbuy,price) {
    return {
        name:name,
        count:count,
        isbuy:isbuy,
        price:price,
        sum:price * count,
    }
}

const ball = createProduct('Ball',1,false,105)
const meat = createProduct('Meat',4,false,70)
const milk = createProduct('Milk',7,false,45)
const water = createProduct('Water',10,true,15)
const cola = createProduct('Cola',6,true,25)

// Додав ще і функцію яка пушить продукт до масиву 

function addProducts(array, ...products) {
    for(let i = 0; i < products.length;i++) {
        array.push(products[i])
    }

    return array
}

addProducts(listProducts,ball,meat,milk,water,cola)

// Функція яка повертає відсортованний масив за спаданням

function firstBought(array) {
    array.sort((a,b)=>{
        return b.isbuy - a.isbuy
    })
}

firstBought(listProducts)

// Функція яка змінює значеня ключа об'екта на true(купленний)

function buyProduct(array,name) {
    for(let i = 0; i < array.length;i++) {
        if(array[i].name === name) {
            array[i].isbuy = true
        }
    }

    return array
}

buyProduct(listProducts,"Milk")

/*
1 Видалення продукту зі списку (видалення повинно проводитися шляхом 
    створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
2 Додавання покупки в список. Враховуй, що при додаванні
  покупки з уже існуючим в списку продуктом, необхідно
  збільшувати кількість в існуючій покупці, а не додавати нову. 
  При цьому також повинна змінитися сума, наприклад, 
  якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.
*/
// Функція що видаляє продукт зі списку

function deleteProductInList(array,name) {
    if(Array.isArray(array)) {
        for(let i = 0; i < array.length;i++) {
            if(array[i].name === name) {
                array.splice(i,1)
            }
        }

        return array
    }
}

// Функція що додає продукт до списку, а якщо він є то лише збільшує кількість та сумму

function addProductsInList(name, count, price) {
   const index = listProducts.findIndex((item) => item.name === name)
   if(index !== -1) {
    listProducts[index].count += count
    listProducts[index].sum = listProducts[index].count * listProducts[index].price
   } else {
    let isbuy = confirm("Ви би хотіли придбати продукт")
    listProducts.push({name, count, price, sum: count * price, isbuy})
   }
}


/*
    1 Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
    2 Підрахунок суми всіх (не) придбаних продуктів.
    3 Показання продуктів в залежності від суми, 
    (від більшого до меншого / від меншого до більшого, 
    в залежності від параметра функції, який вона приймає)
*/

// Функція що вираховує, сумму всіх продуктів

const sumAllProducts = (array) => {
    const sum = array.reduce((total,value) => {
        return total + value.sum
    }, 0)

    return sum
}

// Функція що вираховує, сумму всіх продуктів які є придбанними

const sumAllBought = function(array) {
    const boughtProduct = array.filter((item) => {
        if(item.isbuy === false) {
            return item
        }
    }).reduce((total,value) => {
        return total + value.sum
    },0)

    return boughtProduct
}

// Функція яка сортирує список продуктів за бажаннями користувача

function sortProducts(lessOrMore = true) {
    if(lessOrMore) {
        listProducts.sort((a,b) => {
            return b.sum - a.sum
        })
    } else (
        listProducts.sort((a,b) => {
            return a.sum - b.sum
        })
    )
}

// <---На сам перед виклик модалки, яка поверне значення булеве, і яке буде передане в аргумент функції--->
// let how = confirm('Якщо хочете щоб список продуктів був відсортований за спаданням, нажміть confirm, якщо ні то cancel')
// sortProducts(how)
console.log(listProducts)
console.log(sumAllProducts(listProducts))