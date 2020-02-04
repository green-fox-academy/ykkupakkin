'use strict';

const log = document.getElementById('log');
const div = document.getElementById('logText');

document.addEventListener('keyup', logKey);

function logKey(e) {
  log.textContent = ` ${e.code} and it's  key code is : ${e.keyCode}`;
  div.textContent = 'Last pressed key code is: ';
};