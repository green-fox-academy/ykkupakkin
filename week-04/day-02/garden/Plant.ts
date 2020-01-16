'use strict';

export class Plant { 
  color: string;
  wateringLimit: number;
  waterAbsorb: number;
  waterLevel: number;

  constructor(waterAbsorb, color, wateringLimit){
    this.color = color;
    this.wateringLimit = wateringLimit;
    this.waterAbsorb = waterAbsorb;
    this.waterLevel = 0;
  }

  isItThirsty(): boolean{
    return this.waterLevel < this.wateringLimit
  }
}