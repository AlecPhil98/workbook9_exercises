"use strict"

class Person {

    constructor(firstName, lastName) {

        this.firstName = firstName;
        this.lastName = lastName;


    }


    getFullName() {

        return this.firstName + " " + this.lastName
    }

  
}

class Employee extends Person {
    constructor(firstName, lastName, id, jobTitle, payRate) {
        super(firstName, lastName)

        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }
    getGrossPay(hoursWorked) {
        
        this.hoursWorked = hoursWorked;

        return this.hoursWorked * this.payRate

    }

}

let person1 = new Person("Alec", "Philavong")
console.log(`${person1.getFullName()}`)

let employee1 = new Employee("Bob", "Wood", 1, "Manager", 30.00)
let employee2 = new Employee("John", "Doe", 2,"Construction",  20.00)

console.log(employee1)
console.log(employee2)

let grossPay1 = new Employee("Rob","Page",12,"Artist",35.00)
let grossPay2 = new Employee("Matt", "Patt",15,"Trashman",50)

console.log(`${grossPay1.getFullName()} makes $${grossPay1.getGrossPay(10)}`)
console.log(`${grossPay2.getFullName()} makes $${grossPay2.getGrossPay(10)}`)