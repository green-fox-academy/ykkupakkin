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

const mainContent = document.querySelector('mainContainer');

fetch('/posts')
  .then(res => res.text())
  .then(content => mainContent.innerText = content);