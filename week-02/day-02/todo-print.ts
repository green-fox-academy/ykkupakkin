'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo
let myTodo: string = "My todo: \n";
let todoText1: string = ' - Buy milk\n';
let todoText2: string = " - Download games\n";
let todoText3: string = "       - Diablo"

console.log(myTodo.concat(todoText1+todoText2+todoText3));