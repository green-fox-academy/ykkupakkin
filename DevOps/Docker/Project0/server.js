'use strict';

// -- Base depedencies
const express = require('express');
const app = express();
const PORT = 3000 || 8081


// -- Express configuration
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// -- Endpoint
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get("/hello", (req, res) => {
  res.status(418).send("Hello World");
});

// -- PORT Listen
app.listen(PORT, () => {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});
