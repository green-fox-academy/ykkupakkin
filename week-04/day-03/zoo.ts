'use strict';

abstract class Animal {
  name: string;
  age: number;
  gender: string;
  type: string;
  typeOfBreed: string;


  constructor(name: string, age: number, gender: string, type: string, typeOfBreed:string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.type = type;
    this.typeOfBreed = typeOfBreed;
  }

  getName(){

  }

  breed(){

  }
}


class Reptile extends Animal {
  
  age: number;
  type: string;
  typeOfBreed: string;

  constructor(type: string, typeOfBreed: string){
    super(name, age, gender, type, typeOfBreed);
    this.age = age;
    this.gender = gender;
    this.type = type;
    this.typeOfBreed = typeOfBreed;
  }

}


// const reptile = new Reptile('Crocodile');
// const mammal = new Mammal('Koala');
// const bird = new Bird('Parrot');

// console.log('How do you breed?');
// console.log(`A ${reptile.getName()} is breeding by ${reptile.breed()}`);
// console.log(`A ${mammal.getName()} is breeding by ${mammal.breed()}`);
// console.log(`A ${bird.getName()} is breeding by ${bird.breed()}`);