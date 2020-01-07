"use strict";


class Sponsor extends Person {
    company: string;
    hiredStudents: number;

    constructor(company: string = "Google", hiredStudents: number = 0){
      super();
      this.company = company;
      this.hiredStudents = hiredStudents;
    }

    introduce() { 
      console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender + " who represents " + this.company + "and hired " + this.hiredStudents + "students so far. ");
    }

    hire() {
      this.hiredStudents = this.hiredStudents++;
    }

    getGoal() { 
      console.log("Hire brilliant junior software developers.");
    }
}