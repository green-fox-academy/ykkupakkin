"use strict";

import { Person } from './person'

export class Mentor { 
    level: string;
    name: string;
    age: number;
    gender: string;

    constructor(name: string, age: number, gender: string, level: string){
        this.name = Person.name;
        this.age = Person.age;
        this.gender = Person.gender;
        this.level = level;

    }

    getGoal(){
        console.log("Educate brilliant junior software developers.");
    }

    introduce(){
        console.log("Hi, I'm " + Person.name + " a " + Person.age + " year old " + Person.gender +  this.level + " mentor.");
    }
}

