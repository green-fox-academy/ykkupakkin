'use strict';

export class SumArr {

  sum(arr: number[]): number {

    let total: number = 0;

    for (let i of arr) { 
      total += i;
    }
    return total
  }

}

let sum1 = new SumArr;
console.log(sum1.sum([1, 2, 3, 4]));
