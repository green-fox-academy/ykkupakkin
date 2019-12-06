'use strict';

// Write a program that calculates the sum and the average from 1 to a given number.
// Example input: 5
// Example output: Sum: 15, Average: 3

// for (mi, meddig, mit)
let sum:number=0;
let Num:number=5;

for(let i=1;i<=Num;i++) {
    sum=sum+i;
}

console.log("Sum: "+ sum);

console.log("Avg: "+ sum/Num);