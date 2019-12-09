'use strict';

let num: number = 5;
let numbersUntilFive: number = calculateSum(num);
console.log(numbersUntilFive);

function calculateSum(until: number): number {
  console.log('until is ' + until);
  let sum: number = 0;
  for (let i: number = 0; i <= until; i++) {
    sum += i;
  }
  console.log(sum);
  return sum;
}

calculateSum(10);

let pi: number = parseFloat('3.14');
let notPi: number = parseInt('3.14');
console.log(parseFloat('3.14'));
console.log(pi);

function helloClass(className: string, mentor?: string, size: number = 10): void {
  if (mentor === undefined) {
    console.log('Hi ' + className + ' class!');
  } else {
    console.log('Hi ' + className + ' class! Our mentor is ' + mentor + 'And we are ' + size);
  }
}

helloClass('Reddit');
helloClass('Pityu', 'Reboot', 11);

function asd(...args){
  console.log(args);
}

asd('sa',1,'asfd');
asd('sad');