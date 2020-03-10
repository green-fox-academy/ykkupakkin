'use strict';

export class Flora {
  private water: number;
  private wateringLimit: number;
  private absorptionRate: number;
  private color: string;

  constructor(limit: number, absorption: number, color: string) {
    this.water = 0;
    this.wateringLimit = limit;
    this.absorptionRate = absorption;
    this.color = color;
  }

  watering(amount: number): void {
    this.water = this.water + amount * this.absorptionRate;
  }

  needsWater(): boolean {
    return this.water < this.wateringLimit;
  }

  getIdentity() {
    return 'Flora';
  }

  thirstyCheck() {
    if (this.needsWater()) {
      console.log(`The ${this.getColor()} ${this.getIdentity()} needs water`);
    }
    else {
      console.log(`The ${this.getColor()} ${this.getIdentity()} doesn't need water`);
    }
  }

  getColor(): string {
    return this.color;
  }
}