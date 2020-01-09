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

class Plant {
  color: string;
  waterLevel: number;
  waterAbsorb: number;
  waterInput: number;
  plantType: string;

  constructor(color: string, waterLevel: number = 0, waterAbsorb: number = 1, waterInput: number = 0, plantType: string) {
    this.color = color;
    this.waterAbsorb = waterAbsorb;
    this.waterInput = waterInput;
    this.waterLevel = waterLevel;
    this.plantType = plantType;
  }
}


class Tree extends Plant {
  color: string;
  waterLevel: number;

  constructor(color: string, waterLevel: number = 0){
    super(color, waterLevel, waterAbsorb, waterInput, plantType);
    this.color = color;
    this.waterLevel = waterLevel;
  }

  if() {
    //water level less than 10 then water the tree and it absors 40%

  }
}

class Flower extends Plant {
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