/*Реалізуй клас User. Під час створення екземпляру на базі цього класу, 
обʼєкт повинен мати вигляд {name: ‘Petro’, role: ‘admin’} (role може бути або admin або user).
 У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert-у відповідне поле, 
 яке введено некоректно. У класі User повинні бути такі компоненти:

        * getName
        * getRole
        * login
        * logout
        * сhangeName
        * changePassword
        
    У класі Admin повинні бути такі компоненти:

        * addUser
        * removeUser
        * changeUserRole
        * getAllUsers
        * removeAllUsers*/

class User {
    constructor(name,role) {
            if(isNaN(name)) {
                console.log(`Your name ${name} set`)
                this.name = name
            } else {
                console.log("Try for another time ")
            } 
            
            if(isNaN(role)) {
                console.log(`Your role ${role} set`)
                this.role = role
            } else if(!isNaN(role)) {
                console.log("Try for another time ")
            }
    }

    getName() {
        alert(`Your name is ${this.name}`)
        return this.name
    }

    getRole() {
        alert(`Your role is ${this.role}`)
        return this.role
    }

    login() {
        alert("Hello, please login to our website")
        this.password = +prompt("Please, enter your password")
        this.name = prompt("Please, enter your nickname or your name")
    }

    logout() {
        let agreement = confirm("Now you will logout from your account")

        if(agreement) {
            this.name = null
            this.password = null
            alert("Thanks for your attention, we will wait you to next time ^_^")
        } else {
            alert("Okay, you stayed on your account :)")
        }
    }

    changeName() {
        let agreement = confirm("Do you wanna change your name? ^_^")

        if(agreement) {
            this.name = prompt("Change your name below")
        } else {
            alert("Okay, your name not changed ^_^")
        }
    }

    changePassword() {
        let agreement = confirm("Do you wanna change your password?")

        if(agreement) {
            this.password = prompt("Please write, your new password")
        } else {
            alert("Your password not changed ^_^")
        }
    }

}

// let user = new User("1","1")
// console.log(user)

/*У класі Admin повинні бути такі компоненти:

        * addUser
        * removeUser
        * changeUserRole
        * getAllUsers
        * removeAllUsers*/

class Admin extends User {
    constructor(name,role) {
        super(name,role)
        this.listUsers = []
    }

    addUser() {
        if(this.role == "user") {
            alert("Sorry but you don't have rights, for this action")
            return
        } else {
            alert(`Welcome admin ${this.name}`) 

            let name = prompt("Set name for new user")
            let role = prompt("Set role for new user")

            let newUser = new User(name,role)
            let listUsers = this.listUsers

            listUsers.push(newUser)

            return this.listUsers
        }
    }

    removeUser() {
        if(this.role == "user") {
            alert("Sorry but you don't have rights, for this action")
            return
        } else {
            let name = prompt(`Find name user for remove`)

            let listWithoutUser = []
            
            for(let user of this.listUsers) {
                if(user.name == name) {
                    continue
                } else {
                    listWithoutUser.push(user)
                }
            }

            return this.listUsers = listWithoutUser
        }
    }

    changeUserRole() {
        if(this.role == "user") {
            alert("Sorry but you don't have rights, for this action")
            return
        } else {
            let nameForFind = prompt("Set name for change role user")
            let roleChange = prompt("Set new role for user(user or admin)")

            for(let user of this.listUsers) {
                if(user.name == nameForFind) {
                    user.role = roleChange
                    return
                } 
            }

            return this.listUsers
        }
    }

    removeAllUsers() {
        if(this.role == "user") {
            alert("Sorry but you don't have rights, for this action")
            return
        } else {
            let agreement = confirm("Do you wanna delete all users?")

            if(agreement) {
                this.listUsers = []
                alert("All users was deleted ^_^")
                return this.listUsers
            } else {
                alert("Okay, every user wasn't deleted")
            }
        }
    }

    getAllUsers() {
        if(this.role == "user") {
            alert("Sorry but you don't have rights, for this action")
            return
        } else {

        }
    }
}

// let admin = new Admin("Denis","admin")
// console.log(admin)

// admin.addUser()
// admin.removeUser()