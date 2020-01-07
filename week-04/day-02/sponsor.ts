"use strict";

import { Person } from './person'

export class Sponsor {
    company: string;
    hiredStudents: number;
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string, company: string, hiredStudents?: number){
      this.name = Person.name;
      this.age = Person.age;
      this.gender = Person.gender;
      this.company = company;
      this.hiredStudents = hiredStudents;
    }

    introduce() { 
      console.log("Hi, I'm " + Person.name + " a " + Person.age + " year old " + Person.gender + " who represents " + this.company + "and hired " + this.hiredStudents + "students so far. ");
    }

    hire() {
      this.hiredStudents = this.hiredStudents++;
    }

    getGoal() { 
      console.log("Hire brilliant junior software developers.");
    }
}