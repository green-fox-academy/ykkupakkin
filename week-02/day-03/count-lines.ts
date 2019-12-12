// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.
'use strict';

const path: string = './my-file.txt'
const characterEncoding: string = 'utf-8';

function fileSearch(fileName: string) {
    const fs = require('fs');
    try {
        let fileContent = fs.readFileSync(path, characterEncoding);
        console.log(fileContent.split('\n').length);
        

    } catch (error) {
        console.log("zero");
    }
}

fileSearch("./my-file.txt");


