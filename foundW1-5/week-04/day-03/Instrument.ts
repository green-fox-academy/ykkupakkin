'use strict';

abstract class Instrument{
    name: string;
    numberOfString: number;

    constructor(name: string) {
        this.name = name;
    }
    
    sound(): void{
    }
   
    play(): void{
        console.log(this.name + ', a ' + this.numberOfString + ' stringed instrument that goes ' + this.sound());
    }   
}

abstract class StringedInstrument extends Instrument {

    numberOfStrings : number;

    constructor(name: string, numberOfString: number) {
     super(name);
     this.numberOfStrings = numberOfString;   
    }
    
   sound(): void{
   }
}

class ElectricGuitar extends StringedInstrument {

    numberOfString: number;

    constructor(numberOfString: number = 6) {
        super('Electric Guitar', numberOfString);
        this.numberOfString = numberOfString;
    }

    sound(): string {
        return 'Twang'
    }
}

class BassGuitar extends StringedInstrument {

    numberOfString: number;

    constructor(numberOfString: number = 4) {
       super('Bass Guitar', numberOfString);
       this.numberOfString = numberOfString;
    }

    sound(): string {
        return 'Duum-duum-duum'
    }
}

class Violin extends StringedInstrument {

    numberOfString: number;

    constructor(numberOfString: number = 4) {
       super('Violin', numberOfString);
       this.numberOfString = numberOfString;
    }

    sound(): string {
        return 'Screech'
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