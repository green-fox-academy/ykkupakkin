"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "ykkupakkin",
  password: "almakortebanan",
  database: "reddit"
});

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello random citizen"
  });
});

conn.connect(err => {
  if (err) {
    console.error(`Even Anton couldn't find his way through.`, err);
    return;
  }
  console.log("Anton found his way");
});

app.listen(PORT, () => {
  console.log("You have awaken, the Son of Anton.");
});