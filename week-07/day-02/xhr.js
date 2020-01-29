// GET, POST, PUT, DELETE

// GET http://localhost:3000/api/items

let STATUS_CODE_OK = 200;
let xhr = new XMLHttpRequest();
xhr.open('GET', 'http://localhost:3000/api/items', /* false */);
xhr.onreadystatechange = function (event) {
  // console.log(event);
  // console.log(event.target.response);
  // console.log(typeof event.target.response);
  console.log(event.target.readyState);
  if (event.target.readyState === XMLHttpRequest.DONE && event.target.status === 200) {
    let response = JSON.parse(event.target.response);
    console.log(response);
    response.forEach((item) => {
      let liElement = document.createElement('li');
      liElement.innerText = item;
      document.body.appendChild(liElement);
    });
  }
};
xhr.setRequestHeader('X-API-Key', 'wqufijewuofhq783f3q');
xhr.send(); // <-- here comes the request body soon!

console.log('end of program');

let GIPHY_API_KEY = undefined;
let giphfyXHR = new XMLHttpRequest();
giphfyXHR.open('GET', `http://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=kitten`);
giphfyXHR.onload = (event) => {
  console.log(event.target.response);
}
giphfyXHR.send();
