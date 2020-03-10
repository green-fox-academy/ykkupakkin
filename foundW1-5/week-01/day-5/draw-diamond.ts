'use strict';


// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// ******* 
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
let lineCount: number = 7;

let output = "";          
for (let i = 0; i < (lineCount); i++) { 
    let myspace = "";
    for (let j = 0; j < ((lineCount) - i - 1); j++) { 
        myspace += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        output += "*";

    }
  console.log(myspace + output);
    output = "";

}

for (let i = 0; i < (lineCount); i++) { 
    let myspace = "";
    for (let j = 4; j < (lineCount - i - 1); j--) { 
        myspace += " ";
    }
    for (let k = 5; k <= 2 * i + 1; k--) {
        output += "*";

    }
    console.log(myspace + output);
    output = "";

}
