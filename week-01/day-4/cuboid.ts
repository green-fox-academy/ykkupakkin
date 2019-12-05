'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600 S=2(ab+ac+bc) 
// 
// Volume: 1000

let sideA: number =50;
let sideB: number =50;
let sideC: number =25;

// there will be math magic

console.log('Surface Area: ' + 2*(sideA*sideB + sideA*sideC + sideB*sideC)); 
console.log('Volume: ' + sideA*sideB*sideC);