"use strict";   


class Mentor extends Person { 
    level: string;
   

    constructor(level: string = "intermediate"){
        super();
        this.level = level;

    }

    getGoal(){
        console.log("Educate brilliant junior software developers.");
    }

    introduce(){
        console.log("Hi, I'm " + this.name + " a " + this.age + " year old " + this.gender +  this.level + " mentor.");
    }
}

