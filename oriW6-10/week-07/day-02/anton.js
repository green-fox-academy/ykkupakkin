'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/welcome', (req, res) => {
    res.render('home', {
        title: 'Hello Barbi'
    });
});

app.get('/hello', (req, res) => {
    res.send(`Hello <br><strong>${req.query.name}!</strong>`);

});

app.get('/todo', (req, res) => {
    let username = `awesome ${req.query.name}`;
    res.render('webshop', { username: username, todos: database.todos });
});

// -- Multi routing

let action = (req, res, next) => {
    res.json({
        until: Number(req.params.action)
    });
};


let sum = (req, res, next) => {
    res.json({
        result: req.params.action // add everything maybe a function
    });
};

let factor = (req, res) => {
    res.json({
        result: req.params.action // factorial
    });
};
app.get('/dountil/:action', [action, sum, factor]);


app.listen(PORT, () => {
    console.log('You have awaken, the Son of Anton.');
});