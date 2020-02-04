// -- new Date().getTime() This will give you the time in ms.

const btn = document.querySelector('button');
const time = document.getElementById('time');


btn.addEventListener('click', timer);

function timer() {
    time.innerHTML = `${new Date().getTime()}`;
    //btn.removeEventListener('click', timer);
    btn.disabled = true;
}