'use strict'

class Garden {
   content: Plant[] = [];

  addFlower(flower: Flower): void {
    this.content.push(flower);
  }

  addTree(tree: Tree): void {
    this.content.push(tree);
  }

  getStatus() {
  for (let i = 0; i < this.content.length; i++) {
    if (this.content[i].type === 'flower') {
    console.log((this.content[i] as Flower).waterStat()); 
    } else {
      console.log((this.content[i] as Tree).waterStat()); 
    }
  }
}

  watering(amount: number) :any {
    for (let i = 0; i < this.content.length; i++) {
    this.content[i].water = this.content[i].water + ( amount * this.content[i].inclusion / this.content.length)
    }
    return this.getStatus();
  }
}

class Plant { 
  color: string;
  water: number;
  need: number;
  inclusion: number;
  type: string;

  constructor(color: string, water = 0, need = 0, inclusion = 1, type: string = 'plant') {
    this.color = color;
    this.water = water;
    this.need = need;
    this.inclusion = inclusion;
    this.type = type;
  }
}


class Flower extends Plant {

  constructor(color: string, water: number = 0, need: number = 5, inclusion: number = 0.75, type: string = 'flower') {
  super(color, water, need, inclusion);
  this.type = type;
  }

  waterStat(): string {
    // console.log('flower'); 
    if (this.water<this.need) {
      return `The ${this.color} ${this.type} needs water`
    }
  return `The ${this.color} ${this.type} doesnt water`
  }
}

class Tree extends Plant {
 
  constructor(color: string, water: number = 0, need: number = 10, inclusion: number = 0.4, type: string = 'tree') {
  super(color, water, need, inclusion);
  this.type = type;
  }
  waterStat(): string {
    // console.log('tree'); 
    if (this.water<this.need) {
      return `The ${this.color} ${this.type} needs water`
    }
  return `The ${this.color} ${this.type} doesnt water`
  }
}

let garden = new Garden();

let flower1 = new Flower('yellow');
garden.addFlower(flower1);
let flower2 = new Flower('blue');
garden.addFlower(flower2);

let tree1 = new Tree('purple');
garden.addTree(tree1);
let tree2 = new Tree('orange');
garden.addTree(tree2);




garden.watering(40);
garden.watering(70);

console.log(garden);