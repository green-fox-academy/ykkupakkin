"use strict";

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

const path = './my-file1.txt';
const characterEncoding: string = 'utf-8';
let fileContent: string = 'Bence Csoda';

function overWrite(fileContent: string) {
    const fs = require('fs');
    try {
        fs.writeFileSync(path, fileContent, characterEncoding);
    } catch(e) {
        console.log("Unable to write file: my-file1.txt");
    }    
}
overWrite(fileContent);