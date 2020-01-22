'use strict';

let liHolder = document.querySelectorAll('li');
let list = ['apple', 'banana', 'cat', 'dog'];

for (let i = 0; i < list.length; i++) {
  liHolder[i].innerText = list[i]
}