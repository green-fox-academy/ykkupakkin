'use strict';

let letterArr: string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

export function countLetter(inputString: string){
  let counter= {};
  for(let i: number = 0; i < inputString.length; i++) {
    let character: string = inputString.charAt(i);
    if(countLetter[character]) {
      counter[character]++;
    } else {
      counter[character] = 1;
    }
  }
  return counter;
};