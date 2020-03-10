// Create a Station and a Car classes
// Station
// gasAmount
// refill(car) -> decreases the gasAmount by the capacity of the car and increases the cars gasAmount
// Car
// gasAmount
// capacity
// create constructor for Car where:
// initialize gasAmount -> 0
// initialize capacity -> 100

import { Car } from './car'
import { Station } from './station'


let MOL = new Station();
let BMW = new Car();

console.log(MOL.gasAmount);
MOL.refill(BMW);
console.log(MOL.gasAmount);
