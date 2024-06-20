"use strict"


class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
    getIntro() {
        return "My name is " + this.getFullName() + "!";
    }
}

class Student extends Person {
    constructor(firstName, lastName, grade, major) {

        // hand the parameter the parent know hjow to handle to the parenet cosnstrutor
        super(firstName, lastName);
        // handle the propoerties that are new for this class
        this.grade = grade;
        this.major = major;

    }
    
}

class LawStudent extends Student {

    constructor(firstName,lastName,grade, barsore){

        super(firstName,lastName);

        this.grade = grade;
        this.barsore = barsore;

    }
}

let alecTheStudent = new Student("alec", "philavong", 12, "Film")
console.log(alecTheStudent)

let alecThePerson = new Person("alec", "philavong")
console.log(alecThePerson)

console.log(alecTheStudent.major)

let alecLawStudent = new LawStudent("alec","philavong",15,200)
console.log(alecLawStudent)