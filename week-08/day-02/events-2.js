'use strict';


const li = document.querySelectorAll('li');
const button = document.querySelector('button');
const result = document.querySelector('.result');
const liCount = () => {
  //alert(`This list has ${li.length} element`);
  result.innerText = `This list has ${li.length} element`;
};
button.addEventListener('click', liCount);
