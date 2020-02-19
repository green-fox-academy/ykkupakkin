'use strict';

// -- Base dependencies
const express = require('express');
const app = express();
const mysql = require('mysql');
const PORT = 3000 || 8080;
require('dotenv').config();

// -- Connect to the database
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'reddit'
});

conn.connect((error) => {
  if(error) {
    console.error(`Even Anton couldn't find his way through ${error.toString()}`);
    return null;
  }
  console.log('Anton found his way.')
});

// -- Express configuration & EJS
app.use(express.urlencoded()); // -- Look after
app.use(express.json());  // -- Look after
app.use(express.static('views'));
app.set('view engine', 'ejs');

// -- Endpoints
app.get('/', (req, res) => {
  res.send('Itt dolgok lesznek.');
});

app.get('/hello', (req, res) => {
  res.status(418).send('Hello World');
});

app.get('/posts', (req, res) => {
  const AllPosts = 'SELECT * FROM posts;';
  res.set('Content-Type', 'application/json');
  conn.query(AllPosts, (error, rows) => {
    if(error) {
      res.status(400).send({error: 'Invalid endpoint'})
    } else {
      res.send(creatingJSON(rows));
    }
  });
});

// -- Post Handling
app.post('/posts', (req, res) => {
  res.set('Content-Type', 'application/json');
  let title = req.body.title;
  let url = req.body.url;
  conn.query(`INSERT INTO posts (title, url) VALUES (?, ?)`, [title, url], (err, rows) => {
    if (err) {
      res.send(err);
    } else {
      conn.query(`SELECT * FROM posts ORDER BY post_id DESC LIMIT 0, 1`, (err, rows) => {
        if (err) {
          res.send(err);
        } else {
          res.status(200).send(creatingJSON(rows));
        }
      });
    }
  });
});

function creatingJSON(rows) {
  let returningJSON = { posts: [] };
  rows.forEach(element => {
    let objectToPush = {};
    for (let i in element) {
      objectToPush[i] = element[i];
    }
    returningJSON.posts.push(objectToPush)
  });
  console.log(returningJSON);
  return returningJSON;
}

// -- PORT Listen
app.listen(PORT, ()=> {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});