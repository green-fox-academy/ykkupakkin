"use strict";

import { Person } from './person'

export class Student {
    previousOrganization: string;
    skippedDays: number;
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string, previousOrganization: string, skippedDays?: number){
        this.name = Person.name;
        this.age = Person.age;
        this.gender = Person.gender;
        this.previousOrganization = previousOrganization;
        this.skippedDays = skippedDays;
    }

    getGoal(): void{
        console.log("Be a junior software developer.");
    }

    introduce(): void{
        console.log("Hi, I'm " + Person.name + " a " + Person.age + " year old " + Person.gender + " from " + this.previousOrganization +" who skipped " + this.skippedDays + " days from the course already.");
    }

    skipDays(numberOfDays: number){
        this.skippedDays = this.skippedDays + numberOfDays;
    }

}