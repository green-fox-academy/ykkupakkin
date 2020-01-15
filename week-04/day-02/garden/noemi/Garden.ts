'use strict';
import { Flora } from './Flora'
import { Flower } from './Flower';
import { Tree } from './Tree'

class Garden {
  private listOfPlants: Flora[] = [];

  addFlower(color: string): void {
    this.listOfPlants.push(new Flower(color));
  }
  addTree(color: string): void {
    this.listOfPlants.push(new Tree(color));
  }

  getGarden(): void {
    for (let i: number = 0; i < this.listOfPlants.length; i++) {
      this.listOfPlants[i].thirstyCheck();
    }
  }

  waterGarden(fullWaterAmount: number): void {
    let waterPortion: number;
    let thirstyPlants: number = 0;
    for (let i: number = 0; i < this.listOfPlants.length; i++) {
      if (this.listOfPlants[i].needsWater()) {
        thirstyPlants++;
      }
      console.log(this.listOfPlants[i].needsWater());
    }
    waterPortion = fullWaterAmount / thirstyPlants;
    console.log(waterPortion);
    for (let i: number = 0; i < this.listOfPlants.length; i++) {
      if (this.listOfPlants[i].needsWater()) {
        this.listOfPlants[i].watering(waterPortion);
      }
    }
    this.getGarden();
  }

}

let myGarden = new Garden();
myGarden.addFlower('yellow');
myGarden.addFlower('blue');
myGarden.addTree('purple');
myGarden.addTree('orange');
myGarden.getGarden();
myGarden.waterGarden(40);
myGarden.waterGarden(70);