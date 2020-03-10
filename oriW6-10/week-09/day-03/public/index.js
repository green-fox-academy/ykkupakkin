"use strict";

fetch("http://localhost:3000/posts")
  .then((response) => {
    if (response.status !== 200) {
      console.log(
        "Looks like there was a problem. Status Code: " + response.status
      );
      return;
    }
    // Examine the text in the response
    response.json().then((data) => {
      data.forEach(post => {
        let posts = document.querySelector(".posts")
        let pharagraph = document.createElement('p');
        pharagraph.innerText = post.title;
        pharagraph.innerText += post.url;
        posts.appendChild(pharagraph);
      });
    });
  })
  .catch(function(err) {
    console.log("Fetch Error :-S", err);
  });

