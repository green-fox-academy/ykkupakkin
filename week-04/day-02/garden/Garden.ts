'use strict';

// import { Flower } from './Flower';
// import { Tree } from './Tree';

class Garden{
    state: string;
    flowers: Flower[] = [];
    trees: Tree[] = [];

    constructor(state: string, flowers: number, trees: number){
        this.state = state;
        this.flowers = [];
        this.trees = [];
    }

    gardenState(){
       console.log('This garden have' + this.flowers + '')
    }

    waterGarden(){
        //.. waters the garden twice.
    }
}

class Plantation {
  color: string;
  waterLevel: number;
  waterAbsorb: number;
  waterInput: number;

  constructor(color: string, waterLevel: number, waterAbsorb: number, waterInput: number) {
    this.color = color;
    this.waterAbsorb = waterAbsorb;
    this.waterInput = waterInput;
    this.waterLevel = waterLevel;
  }
}


class Tree extends Plantation {
  color: string;
  waterLevel: number;

  constructor(color: string, waterLevel: number = 0){
    super(color, waterLevel, waterAbsorb, waterInput);
    this.color = color;
    this.waterLevel = waterLevel;
  }

  if() {
    //water level less than 10 then water the tree and it absors 40%

  }
}

class Flower extends Plantation {
  color: string;
  waterLevel: number;

  constructor(color: string, waterLevel: number = 0){
    super(color, waterLevel, waterAbsorb, waterInput)
      this.color = color;
      this.waterLevel = waterLevel;
  }
  
  if(){
    // water level less than 5 then water the flower and it absors 75%
  }

}