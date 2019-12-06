'use strict';

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

let lineNum: number = 8;

for(let i:number = 0; i <= lineNum; i++) {
    let j:string = ''
    for(let k:number = 0; k < lineNum; k++) {
        if((i+k) % 2 !== 0 ) {
        j += '0';
        } else {
            j +=' ';
        }
    }

    console.log(j)
}
