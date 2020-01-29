'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.static('assets'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/doubling', (req, res) => {
    const doubling = Number(req.query.input * 2);
    if (!req.query.input) {
        res.json({
            error: "Please provide an input!",
        });
    } else {
        res.json({
            received: Number(req.query.input),
            result: doubling
        });
    }

});

app.get('/greeter', (req, res) => {

    if (!req.query.name && !req.query.title) {
        res.status(400).send(res.json({
            error: "Please provide a name and a title!",
        }));
    } else if (!req.query.name) {
        res.status(400).send(res.json({
            error: "Please provide a name!",
        }));
    } else if (!req.query.title) {
        res.status(400).send(res.json({
            error: "Please provide a title!",
        }));
    } else {
        res.json({
            welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
        });
    }

});

app.get('/appenda/:appendable', (req, res) => {
    res.json({
        appended: `${req.params.appendable}a`,
    });
});

app.post('/dountil/:action', (req, res) => {
    if (req.params.action === "sum") {
        res.send('cica')
    } else if (req.params.action === "factor") {
        res.send('kutya')
    }
    res.json({
        allatfaj: `${req.params.action}`,
    });
});

app.listen(PORT, () => {
    console.log(`You have awaken, the Son of Anton on port: ${PORT}`);
});