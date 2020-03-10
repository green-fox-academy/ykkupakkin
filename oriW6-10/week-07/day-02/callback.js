'use strict';

const mapWith = (array, callback) => {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]));
    }

    // The mapWith() function should iterate over the given array and call the callback function on every element.
    // It stores the callback return values in the output.
    // The mapWith() should return with the output array.

    return output;
}

const addOne = (number) => {
    return number + 1;
}
console.log(mapWith([1, 2, 3], addOne));
console.log(mapWith([1, 2, 3], (a) => a * 10));

// Exercise 1:

// The callback is only defined when we call the function.
//expected result: [2, 3, 4]

// Exercise 2:

//const secondElement = words[0].split('')[1];
// Create a callback function which removes every second character from a string
const words = ['map', 'reduce', 'filter'];

const removeSecondLetter = function(array) {
    let output = '';
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            output += array.charAt(i);
        }
    }
    return output;
}


// this take the NTH char and slice there.
//let str = 'almafa'
//console.log(str.slice(0, 3) + str.slice(4, str.length));

console.log(mapWith(words, removeSecondLetter));
// expected result: ['mp','rdc', 'fle']