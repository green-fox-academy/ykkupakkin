'use strict';

/*
const asteroid = document.querySelector('.asteroid');

console.log(asteroid.innerHTML);
console.log(asteroid.textContent);
asteroid.innerHTML = 'This is your <strong>new content!</strong>';

*/

let elementTag = document.getElementsByTagName('p');
console.log(elementTag);

for(let i = 0; i < elementTag.length - 1; i++) {
  elementTag[i].innerHTML = elementTag[3].innerHTML;
}



