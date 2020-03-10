'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

//console.log(((24-currentHours)*3600)+((60-currentMinutes)*60)+(60-currentSeconds)) 

let currentRemaining: number = currentHours*3600 + currentMinutes*60 + currentSeconds;
let DayTime: number = 24*3600;

console.log(DayTime-currentRemaining +' seconds')