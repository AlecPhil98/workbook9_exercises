"use strict"

// th eemplyee class to be used as a blueprint top create Employees
class Employee {
    // runs when we create a "new" Employee
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }



    getFullName() {

        return this.firstName + " " + this.lastName

    }

    promote(newJobTitle, newPayRate) {

        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
        
        let intro = "Hi! I'm " + this.getFullName() + " and I am a " + this.jobTitle;
        return intro

    }
}



//create employee 1 from the Employee class (blueprint) using the "new" keyword
let employee1 = new Employee(1, "Ian", "Auston", "Graphic Artist", 42.50);
let employee2 = new Employee(2, "Daniel", "Hernadez", "Giga Chad", 25.25)

//print out some info about employee 1
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);



employee1.promote("Crane Operator", 50.50);
console.log(`Job title is ${employee1.jobTitle} `)
console.log(`Pay rate is $${employee1.payRate}`)

employee2.promote("New King", 56.50)
console.log(`Job title is ${employee2.jobTitle} `)
console.log(`Pay rate is $${employee2.payRate}`)

let intro = employee1.getIntro()
console.log(intro)




