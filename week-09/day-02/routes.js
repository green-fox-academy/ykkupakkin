const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`This a a page and I am Groot.`);
});

app.get("/groot", (req, res) => {
  if (!req.query.message) {
    res.status(200).json({
      error: `I am Groot!`
    });
  } else {
    res.status(200).json({
      received: req.query.message,
      translated: `I am Groot!`
    });
  }
});

module.exports = app;
