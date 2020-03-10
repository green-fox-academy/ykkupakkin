'use strict';

// -- Base dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000 || 8080;
require('dotenv').config();
const fetchVideoInfo = require('youtube-info');


// -- Connect to the database
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(error => {
  if (error) {
    console.error(
      `Even Anton couldn't find his way through ${error.toString()}`
    );
    return null;
  }
  console.log("Anton found his way.");
});

// -- Express configuration & EJS
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(express.static("public"));

// -- Endpoints
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/hello", (req, res) => {
  res.status(418).send("Hello World");
});

app.get('/random', (req, res)=>{
  fetchVideoInfo('2ih0CluTjFg')
  .then((videoInfo) => {
    console.log(videoInfo.title, videoInfo.url, videoInfo.views);
    res.send(videoInfo);
  });
});



// -- PORT Listen
app.listen(PORT, () => {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});