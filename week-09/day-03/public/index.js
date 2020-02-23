'use strict';

// window.onload = () => {
//   let allPost = new XMLHttpRequest();
//   allPost.open('GET', 'http://localhost:3000/posts');
//   allPost.send();
//   allPost.onload = (response) => {
//     if(response.target.status === 200) {
//       let resultObject = JSON.parse(response.target.response);
//       resultObject.forEach(post => {
//         document.querySelector('.mainContainer').appendChild(post)
//       });
//     };
//   };
// };

// const listAllPost = (postObject) => {
//   let currentPost = document.createElement('div');
//   return currentPost;
// };

// const mainContent = document.querySelector('main');

// fetch('/posts')
//   .then(res => res.text())
//   .then(console.log(res.text()))
//   .then(content => mainContent.innerText = content);

// const myInit = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   mode: 'cors',
//   cache: 'default'
// };

// let myRequest = new Request('/posts', myInit);

// fetch(myRequest)
// .then((resp) => {
//   return resp.json();
// })
// .then((data) => {
//   console.log(data)
// })
// .then(content => mainContent.innerText = content);

// window.onload = () => {
//   let postReq = new XMLHttpRequest();
//   postReq.open('GET', 'http://localhost:3000/posts')
//   postReq.send();
//   postReq.onload = (response) => {
//       if (response.target.status === 200) {
//           let resultObject = JSON.parse(response.target.response);

//           resultObject.forEach(post => {
//               showPosts(post)
//           })
//       }
//   }
// };

// function showPosts(post) {
//   let postsSection = document.getElementById("suggestions");
//   const mancika = document.querySelector('.mancika');
//   let section = document.createElement("section");
//   let owner =document.createElement("small");
//   owner.innerHTML = post.owner;
//   let heading = document.createElement("h2");
//   heading.innerHTML = post.title;
//   let paragraph = document.createElement("p");
//   paragraph.innerHTML = post.url;

//   section.appendChild(owner);
//   section.appendChild(heading);
//   section.appendChild(paragraph);
//   postsSection.appendChild(section);
// };


let button = document.getElementsByClassName('submitBTN')[0];

function clickNewpost(post) {
  console.log(post);
    window.location = '/newpost';
};

button.addEventListener('click', () => clickNewpost('newPost'));

let paragraph = document.createElement('p');


  