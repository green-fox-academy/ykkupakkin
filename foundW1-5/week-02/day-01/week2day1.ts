'use strict';

let name1: string = 'Zsolti';
let name2: string = 'Bela';
// ...
let name10: string = 'Kati';

let names: string[] = ['Zoli', 'Bela', 'Bela', 'Zsuzsi', 'Kati', 'Erzsi'];
let namesLength: number = names.length;
console.log(names.indexOf('Bela'));
console.log(namesLength);
console.log(names[1 + 1]);
console.log(names[names.length - 1]); // last element

let myNumbers: number[] = [];
myNumbers[0] = 1;
myNumbers[1] = 2;
myNumbers.push(33);
myNumbers.push(44);
myNumbers.push(100);
console.log(myNumbers);

let allNames: string = '';

for (let i: number = 0; i < names.length; i++) {
  allNames += names[i];
  names[i] = 'Szia kedves ' + names[i];
}

console.log(names);
names[0] = 'Most megvaltozatattalak Zoli!';
console.log(names.sort());

let arr1: number[] = [1, 2, 3, 4];
let arr2: number[] = [10, 11, 12];
let arr3: number[] = [...arr2, ...arr1];
arr1[0] = 100;

console.log(arr3);

let myMatrix: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let firstLine: number[] = myMatrix[0];
let firstElement: number = myMatrix[0][0] // firstLine[0];

for (let i: number = 0; i < myMatrix.length; i++) {
  for (let j: number = 0; j < myMatrix[i].length; j++) {
    console.log(myMatrix[i][j]);
  }
}

let myText: string = 'Alig varom a szunetet';
let myLetters: string[] = myText.split(' '); // Spacenkent szetvag
console.log(myLetters.join(' ')); //Spacekkel osszeilleszt

let forEachSum: number = 0;
[11, 22, 33, 44].forEach(function (elem, index) {
  forEachSum += elem;
  console.log(elem, index);
});

console.log(forEachSum);