'use strict';

// let myFavColors = ['green', 'blue', 'purple'];

// let thePets = [{
//         'name': 'Meowsalot',
//         'species': 'cat',
//         'favFood': 'tuna',
//     },
//     {
//         'name': 'Barky',
//         'species': 'dog',
//         'favFood': 'carrots',
//     }
// ];

// thePets[1].favFood // -- Carrots
let pageCounter = 1;
let animalContainer = document.getElementById('animal-info');
let btn = document.getElementById('btn');

btn.addEventListener('click', function() {
    let url = `https://learnwebcode.github.io/json-example/animals-${pageCounter}.json`
    let ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', url);
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
    pageCounter++;
    if (pageCounter > 3) {
        btn.classList.add("hide-me");
    }
});

function renderHTML(data) {
    let htmlString = '';

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.likes[j];
            } else {
                htmlString += ` and ${data[i].foods.likes[j]}`;
            }
        }

        htmlString += ' and dislikes ';

        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                htmlString += data[i].foods.dislikes[j];
            } else {
                htmlString += ` and ${data[i].foods.dislikes[j]}`;
            }
        }



        htmlString += '.</p>'
    };
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
};