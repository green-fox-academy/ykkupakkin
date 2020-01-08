'use strict';

abstract class Instrument{
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    play(){
        console.log(this.name + ' is played');
        console.log('and it\'s sounds like: ' + this.sound());
    }
}

abstract class StringedInstrument extends Instrument {

    numberOfStrings : number;

    constructor(name: string, numberOfString: number) {
     super(name);
     this.numberOfStrings = numberOfString;   
    }
    
   sound(): void{
    console.log();
   }
}

class ElectricGuitar extends StringedInstrument {

    numberOfString: number;

    constructor(name: string, numberOfString: number = 6) {
        super(name, numberOfString);
    }

    sound(): void {
        console.log('Twang');
    }
}

class BassGuitar extends StringedInstrument {

    numberOfString: number;

    constructor(name: string, numberOfString: number = 4) {
       super(name, numberOfString);
       this.numberOfString = numberOfString;
    }

    sound(): void {
        console.log('Duum-duum-duum');
    }
}

class Violin extends StringedInstrument {

    numberOfString: number;

    constructor(name: string, numberOfString: number = 4) {
       super(name, numberOfString);
       this.numberOfString = numberOfString;
    }

    sound(): void {
        console.log('Screech');
    }
}


console.log(
    'Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.'
  );
  let guitar = new ElectricGuitar();
  let bassGuitar = new BassGuitar();
  let violin = new Violin();
  
  console.log('Test 1 Play');
  guitar.play();
  bassGuitar.play();
  violin.play();
  
  console.log(
    'Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.'
  );
  let guitar2 = new ElectricGuitar(7);
  let bassGuitar2 = new BassGuitar(5);
  
  console.log('Test 2 Play');
  guitar2.play();
  bassGuitar2.play();