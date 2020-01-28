console.log('start of program');

setTimeout(function greetingFromTheOtherside() {
    console.log('hello from the otherside');
}, 0);

let id = setTimeout(function greetingFromTheOtherside() {
    console.log('hello again from the otherside');
}, 2000);

console.log(id);
clearTimeout(id);
console.log('end of program');

// event loop

let counter = 4;

let intervalId = setInterval(() => {
    console.log(`${counter} hi`);
    counter--;
    if (counter === 0) {
        clearInterval(intervalId);
    }
}, 1000);

function a() {}
let b = function() {}

// first class function
// higher order function
// callback function

let myNumbers = [1, 2, 3];

myNumbers.forEach(function(e, i, arr) {
    console.log(e);
});

function print(e, i, arr) {
    console.log(e);
}

// myNumbers.forEach(print());
// myNumbers.forEach(undefined);

myNumbers.forEach(print);

function myForEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

myForEach(myNumbers, print);
console.log('end of program');

function add(inputA, inputB) {
    let internalResult = inputA + inputB;
    return internalResult;
}

let a = 3;
let b = 5;
let result = add(a, b);
console.log(result);