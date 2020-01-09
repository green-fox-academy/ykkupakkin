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

  class Flora {
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

    class Flower extends Flora {
    constructor(flowerColor: string) {
      super(5, 0.75, flowerColor);
    }
    getIdentity(): string {
      return 'Flower';
    }
  }

  class Tree extends Flora {
    constructor(treeColor: string) {
      super(10, 0.4, treeColor);
    }
    getIdentity(): string {
      return 'Tree';
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