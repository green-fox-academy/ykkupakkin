"use strict";
// -- Exercise 1

// setTimeout(
//   function print() {
//     console.log('TIMED OUT!')}
//     ,300);

// -- Exercise 2

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve("FULFILLED!"), 300);
// });

// promise.then((result) => console.log(result));

//promise.then(console.log);

// -- Exercise 3

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error("REJECTED!")), 300);
// });

// function onReject(error) {
//   console.log(error.message);
// };

// promise
// .then(() => console.log(result),(error) => onReject(error));

// -- Exercise 4

// let promise = new Promise((resolve, reject) => {
//   resolve(console.log("I FIRED"));
//   reject(new Error("I DID NOT FIRE"));
// });

// function onReject(error) {
//   console.log(error.message);
// }

// promise.then(
//   () => console.log(result),
//   error => onReject(error)
// );

// -- Exercise 5

// let promise = new Promise((resolve, reject) => {
//   resolve('PROMISE VALUE');
// });

// promise.then(console.log);
// console.log('MAIN PROGRAM');

// -- Exercise 6