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
for (let i = 0; i < lineCount; i++) { 
    let myspace = "";
    for (let s = 0; s < (lineCount - i - 1); s++) { 
        myspace += " ";
    }
    for (let j = 1; j <= 2 * i + 1; j++) {
        output += "*";

    }
    console.log(myspace + output);
    output = "";

}

for (let i = 0; i < lineCount; i++) { 
    let myspace = "";
    for (let s = 0; s < (lineCount - i - 1); s++) { 
        myspace += " ";
    }
    for (let j = 1; j <= 2 * i + 1; j++) {
        output += "*";

    }
    console.log(myspace + output);
    output = "";

}
