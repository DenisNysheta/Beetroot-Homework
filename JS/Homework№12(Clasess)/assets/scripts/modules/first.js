// 1  Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:

// поле, що зберігає радіус кола;
// get-властивість, яке повертає радіус кола;
// set-властивість, що встановлює радіус кола;
// get-властивість, яке повертає діаметр кола;
// метод, що обчислює площу кола;
// метод, що обчислює довжину кола.

class Circle {
    get radius() {
        return `Радіус кола становить ${this._radius}см`
    }

    set radius(value) {
        this._radius = value
    }
    // Діаметр кола 
    get diametrCircle() {
        this._diametrCircle = this._radius * 2
        return `Діаметр кола становить ${this._diametrCircle}см`
    }
    // Площа кола
    plohaCircle() {
        this._area = Math.PI * Math.pow(this._radius,2)
        return `Площа кола становить ${this._area.toFixed(1)}см`
    }
    // Довжина кола
    lengthCircle() {
        this._length = (2 * Math.PI) * this._radius
        return `Довжина кола становить ${this._length.toFixed(1)}см`
    }
}


let circle = new Circle()
circle.radius = 15

// console.log(circle.radius)
// console.log(circle.diametrCircle)
// console.log(circle.plohaCircle())
// console.log(circle.lengthCircle())