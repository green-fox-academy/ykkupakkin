'use strict';

const king = document.getElementById("b325");
console.log(king.innerHTML);
console.log('-------------------');

let businessLamp = document.getElementsByClassName("asteroid big");
console.log(businessLamp[0].innerHTML);
console.log(businessLamp[1].innerHTML);
console.log('-------------------');

const conceitedKing = document.querySelectorAll('.container > div');
console.log(conceitedKing[0].innerHTML);
console.log(conceitedKing[1].innerHTML);
console.log('-------------------');

const noBusiness = document.querySelectorAll('div');
console.log(noBusiness[0].innerHTML);
console.log(noBusiness[1].innerHTML);
console.log(noBusiness[2].innerHTML);
