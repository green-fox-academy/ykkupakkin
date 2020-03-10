abstract class Aircraft {
  currentAmmo: number;
  maxAmmo: number;
  baseDamage: number;
  type: string;

  constructor(maxAmmo: number, baseDamage: number, type?: string) {
    this.maxAmmo = maxAmmo;
    this.baseDamage = baseDamage;
    this.currentAmmo = 0;
    this.type = type;
  }
  

  fight(): number {
    const damage = this.currentAmmo * this.baseDamage;
    this.currentAmmo = 0;
    return damage;
  }

  refill(refillAmount: number): number {
    let neededAmmo = this.maxAmmo - this.currentAmmo;
    if (neededAmmo < refillAmount) {
      refillAmount -= neededAmmo;
      this.currentAmmo += neededAmmo;
    } else {
      this.currentAmmo += refillAmount;
      refillAmount = 0;
    }
    return refillAmount;
  }

  getType(): string {
    return this.type;
  }

  getStatus(): string {
    const { type, currentAmmo, baseDamage } = this
    return `Type: ${type}, Ammo: ${currentAmmo}, Base damage: ${baseDamage}, All Damage: ${currentAmmo * baseDamage}`
  }

  isPriority(): boolean {
    return this.type == 'F35';
  }

}

class F16 extends Aircraft {
  constructor() {
    super(8, 30, 'F16');
  }
}

class F35 extends Aircraft {
  constructor() {
    super(12, 50, 'F35');
  }
}


class Carrier {
  aircrafts: Aircraft[];
  ammoStore: number;
  hp: number
  
  constructor(ammo: number, hp: number) {
    this.aircrafts = [];
    this.ammoStore = ammo;
    this.hp = hp;
  }

  add(aircraft: Aircraft): void {
    this.aircrafts.push(aircraft);
  }

  fill(): void {
    if(this.ammoStore === 0) {
      console.log('We died here, Jim!');
    }
    for(let i = 0; i < this.aircrafts.length; i++) {
      if(this.aircrafts[i].isPriority()){
        this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
      }
    }
    for(let i = 0; i < this.aircrafts.length; i++) {
        this.ammoStore = this.aircrafts[i].refill(this.ammoStore);
    }
    }

    fight(enemy: Carrier): void {
      let allDmg = 0;
      for(let i = 0; this.aircrafts.length; i++) {
        allDmg = this.aircrafts[i].fight();
      }
      enemy.hp -= allDmg;
    }

  }


const a1: Aircraft = new F16();
const a2: Aircraft = new F16();
const a3: Aircraft = new F35();
const a4: Aircraft = new F35();

const b1: Aircraft = new F16();
const b2: Aircraft = new F16();
const b3: Aircraft = new F35();
const b4: Aircraft = new F35();

const c1: Carrier = new Carrier(1000, 500);
const c2: Carrier = new Carrier(800, 400);

c1.add(a1);
c1.add(a2);
c1.add(a3);
c1.add(a4);

c2.add(b1);
c2.add(b2);
c2.add(b3);
c2.add(b4);

c1.fill();
c2.fill();

console.log(c1,c2);
c1.fight(c2);
c2.fight(c1);
console.log(c1,c2);
