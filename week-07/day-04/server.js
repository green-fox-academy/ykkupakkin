'use strict';

const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'ykkupakkin',
    password: 'almakortebanan',
    database: 'bookstore',
});

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello Kiskutya'
    });
});

app.get('/api', (req, res) => {
    conn.query(`SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price
     FROM book_mast
     INNER JOIN category
     ON category.cate_id = book_mast.cate_id
     INNER JOIN publisher
     ON publisher.pub_id = book_mast.pub_id
     INNER JOIN author
     ON author.aut_id = book_mast.aut_id;`, (err, rows) => {
        res.json(rows);
    });
});

app.get('/books', (req, res) => {
    let category = `${req.query.category}`;
      conn.query(`SELECT book_mast.book_name, author.aut_name, category.cate_descrip, publisher.pub_name, book_mast.book_price
 FROM book_mast
 INNER JOIN category
 ON category.cate_id = book_mast.cate_id
 INNER JOIN publisher
 ON publisher.pub_id = book_mast.pub_id
 INNER JOIN author
 ON author.aut_id = book_mast.aut_id
 WHERE category.cate_descrip = ${JSON.stringify(req.query.category)};`, (err, rows) => {
    res.json(rows);
});
});

conn.connect((err) => {
    if (err) {
        console.error(`Even Anton couldn't find his way through.`, err);
        return;
    }
    console.log('Anton found his way');
});

app.listen(PORT, () => {
    console.log('You have awaken, the Son of Anton.');
});