'use strict';
// Create a function that can reverse a string, which is passed as the parameter
// Use it on this reversed string to check it!

let reversed: string = `.eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI`;


function reverse(): string {
  console.log(reversed.split("").reverse().join(""));
  return reversed;
}

reverse();


