"use strict";

export class Person {
    name: string;
    age: number;
    gender: string;
    static age: number;
    static gender: string;
    
  
    constructor(name: string, age: number, gender: string) {
      this.name = name;
      this.age = age;
      this.gender = gender;
    }
    introduce(): void {
        console.log("Hi, I'm " + this.name + "a " + this.age + "year old " + this.gender);
        
      }

    getGoal(): void {
        console.log("My goal is live for the moment!");
    }
    

}