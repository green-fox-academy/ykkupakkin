'use strict';

let lineCount: number = 7;

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

let output = "";
for (let i = 0; i < lineCount; i++) {
    let myspace = "";
    for (let s = 0; s < (lineCount - i - 1); s++) {
        myspace += " ";
    }
    for (let j = 1; j <= 2 * i + 1; j++) {
        output += "*";

    }
        output = "";

        console.log(myspace + output);
/*let y=4;
    for (y; y > (lineCount + y + 1); y--) {
    let myspace = "";
}
    for (let z = 1; z >= 2 * y - 1; z--) {
    output += "*";

    console.log(myspace + output);
}*/
}