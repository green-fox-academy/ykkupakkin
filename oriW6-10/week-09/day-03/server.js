"use strict";

// -- Base dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const PORT = 3000 || 8080;
const bodyParser= require('body-parser');
require("dotenv").config();

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
app.use(bodyParser.urlencoded());
app.use(express.urlencoded()); 
app.use(express.json()); // -- Body Parser
app.use(express.static("public"));
app.set("view engine", "ejs");

// -- Endpoints
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/hello", (req, res) => {
  res.status(418).send("Hello World");
});

app.get("/posts", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  conn.query(`SELECT * FROM posts;`, (err, rows) => {
    if (err) {
      console.log(err);
      res.status(500).send({ err: "Invalid endpoint" });
      return;
    } else {
      res.status(200).send(rows);
    }
  });
});

// -- Post Handling
app.post("/posts", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  const id = 0;
  const title = req.body.title;
  const url = req.body.url;
  const owner = req.body.owner;
  const timestamp = Date.now();
  const score = 0;
  conn.query(
    `INSERT INTO posts 
     (title, url, timestamp, score, owner) 
     VALUES (?, ?, ?, ?, ?);`,
    [title, url, timestamp, score, owner],
    (err, rows) => {
      if (err) {
        res.status(500).send("Database error!");
        console.log(`TYPE OF ERROR: ${err}`);
        return;
      }
      res.status(200).json({
        id: id,
        title: title,
        url: url,
        timestamp: timestamp,
        score: score,
        owner: owner
      });
      console.log("New Post Created");
    }
  );
});

// -- upvote & downvote
app.put("/posts/:id/upvote", (req, res) => {
  conn.query(
    `UPDATE reddit
     SET score = score +1
     WHERE (id = ${req.params.id});`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Database error!");
        return;
      }
      res.status(200).send(result);
    }
  );
});
//votedown
app.put("/posts/:id/downvote", (req, res) => {
  conn.query(
    `UPDATE reddit 
     SET score = score -1 
     WHERE (id = ${req.params.id});`,
    (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).send("Database error!");
        return;
      }
      res.status(200).send(result);
    }
  );
});
// -- deletepost
app.delete("/posts/:id", (req, res) => {
  conn.query(
    `DELETE FROM posts
     WHERE id=${req.params.id};`,
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(`Database error!`);
        return;
      }
      res.status(200).send(result);
      console.log("Post deleted.");
    }
  );
});

// -- PORT Listen
app.listen(PORT, () => {
  console.log(`You have awaken Son of Anton, on ${PORT}`);
});
