'use strict';


// Create an Animal class
// Every animal has a hunger value, which is a whole number
// Every animal has a thirst value, which is a whole number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one

class Animal {
    hunger: number;
    thirst: number;
    
  
    constructor(hunger: number = 50, thirst: number = 50) {
      this.hunger = hunger;
      this.thirst = thirst;
    }
    eat(): void {
        this.hunger--;
        
      }
    drink(): void {
        this.thirst--;
        
      }
    play(): void {
        this.hunger++;
        this.thirst++;
    }

    }
    
let a1 = new Animal();
    
a1.play();
console.log(a1);
a1.drink();
console.log(a1);