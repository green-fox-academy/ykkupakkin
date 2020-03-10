'use strict';



// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is

let lineCount: number = 4;
let output:string = "";          //we set an empty output string
for (let i = 0; i < lineCount; i++) { //check if we reached the linecount | why do we define the variable empty?
    let myspace:string = "";
    for (let j = 0; j < (lineCount - i - 1); j++) { // we set a number because its easier than string, 
        myspace += " ";
    }
    for (let k = 1; k <= 2 * i + 1; k++) {
        output += "*";

    }
    console.log(myspace + output);
    output = "";

}



