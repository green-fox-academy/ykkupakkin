'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = 3000;
const mysql = require('mysql');
require('dotenv').config()

app.use(bodyParser.urlencoded());


app.use(express.static('public'));
app.use(express.json());

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
})

conn.connect((err) => {
    if(err){
        console.log(err);
    }
    console.log('nem err');
})

app.get('/', (req,res) => {
    res.sendFile('index.html');
})

app.get('/songs', (req,res) => {
    conn.query('SELECT * FROM songs;', (err,result) => {
        if(err){
            res.status(500).json(err);
        }
        res.status(200).json(result)
    })
})

app.post('/addsong', (req,res) => {
    conn.query('INSERT INTO songs (title, singer, url) VALUES (?,?,?)',
     [req.body.title, req.body.singer, req.body.url]);
     res.redirect('/');
})

app.listen(PORT);