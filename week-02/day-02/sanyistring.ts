'use strict';

let myStringWithSingleQuotes: string = 'Hello Greenfox';
let myStringWithDoubleQuotes: string = 'I\'m a hedgehog';

//let myStringWhichWontWork: string = 'Hello Greenfox";

console.log(myStringWithSingleQuotes);
console.log(myStringWithDoubleQuotes);
let example: string = 'Hi, this, is, the, Reddit, class';

//escapewithbackticks
let escapeWithBackticks: string = `Today is the ${(2 * 2) + (3 * 3) -1} rd of the Year`
console.log(escapeWithBackticks);

//cut out a given part
let h: string = example.slice(0,1);
let i: string = example.slice(1,2);
console.log(h,i);
//replace
console.log(example.replace('Reddit', 'Reboot'));
let newString: string = example.replace('Reddit', 'Awesome');
console.log(newString);

//substring
//
//
console.log(example.substring(0, 11)); //Hi, this is
console.log(example.substring(12)); //the Reddit class

console.log(example.charAt(15));

//indexOf

console.log(example.indexOf('Reddit'));

// slice

console.log(example.slice(16));
let whichClass: string = example.slice(16);
console.log(whichClass);

//split
let characterArray: string[] = example.split('');
console.log(characterArray);


let hello: string = 'olleh';
let goodSolutionArray: string[] = hello.split('',3);
console.log(goodSolutionArray);

let goodExampleSplit: string[] = example.split(',');
console.log(goodExampleSplit);


let multiLineString: string = 'Hi, this,\n is, the, Reddit,\n class';
console.log(multiLineString);

let splitByNewLine: string[] = multiLineString.split('\n');
console.log(splitByNewLine);

