'use strict';

// Write a program that opens a file called "my-file.txt", then prints
// each line from the file.
// If the program is unable to read the file (for example it does not exist),
// then it should print the following error message: "Unable to read file: my-file.txt"

const fs = require('fs');
const path: string = './my-file.txt'; //good path
const characterEncoding: string = 'utf-8';

try{
let fileContent = fs.readFileSync(path, characterEncoding);
console.log(fileContent);
} catch (e){
  console.log('Unable to read file: my-file.txt')};