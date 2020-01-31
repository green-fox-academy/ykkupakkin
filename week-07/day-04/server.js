"use strict";

const express = require("express");
const app = express();
const PORT = 3000;
const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "ykkupakkin",
  password: "almakortebanan",
  database: "bookstore"
});

app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello Kiskutya"
  });
});

app.get("/titles", (req, res) => {
  conn.query(
    `
    SELECT 
    book_mast.book_name
    FROM book_mast;`,
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/books", (req, res) => {
  let category = `${req.query.category}`;
  conn.query(
`SELECT book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_price
 FROM book_mast
 INNER JOIN category
 ON category.cate_id = book_mast.cate_id
 INNER JOIN publisher
 ON publisher.pub_id = book_mast.pub_id
 INNER JOIN author
 ON author.aut_id = book_mast.aut_id
 WHERE category.cate_descrip = ${JSON.stringify(category)};`,
    (err, rows) => {
      res.json(rows);
    }
  );
});

app.get("/books1", (req, res) => {
  let query = "";
  let params = [];
  let titles = [];
  if (req.query.category) {
    conn.query(
      `SELECT book_mast.book_name
       FROM book_mast,category 
       WHERE category.cate_descrip=? AND book_mast.cate_id=category.cate_id;`,
      [req.query.category],
      (err, rows) => {
        console.log(err);
        if (err !== null) {
          res.sendStatus(500);
          return;
        }
        rows.forEach(e => {
          titles.push(e.book_name);
        });
        res.send(titles);
      }
    );
  } else if (req.query.publisher) {
    query = `
        SELECT book_mast.book_name
        FROM book_mast,publisher
        WHERE publisher.pub_name=? AND book_mast.pub_id=publisher.pub_id;`;
    params = [req.query.publisher];
  } else if (req.query.plt) {
    conn.query(
      `
        SELECT book_mast.book_name, book_mast.book_price
        FROM book_mast 
        WHERE book_mast.book_price<?';`,
      [req.query.plt],
      (err, rows) => {
        rows.forEach(e => {
          titles.push(e.book_name);
        });
        res.send(titles);
      }
    );
  } else if (req.query.pgt) {
    conn.query(
      `
        SELECT book_mast.book_name, book_mast.book_price
        FROM book_mast
        WHERE book_mast.book_price>?;`,
      [req.query.pgt],
      (err, rows) => {
        rows.forEach(e => {
          titles.push(e.book_name);
        });
        res.send(titles);
      }
    );
  }
  conn.query(query, params, (err, rows) => {
    rows.forEach(e => {
      titles.push(e.book_name);
      res.send(titles);
    });
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
