'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/static', express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/webshop', (req, res) => {
  res.render('home', {
    title: 'Hello Barbi'
  });
});

app.get('/hello', (req, res) => {
  res.send(`Hello <br><strong>${req.query.name}!</strong>`);
  
});

app.get('/todo', (req, res) => {
  let username = `awesome ${req.query.name}`;
  res.render('webshop', { username: username, todos: database.todos });
});

app.get('/bar', (req, res) => {
  let alcohol = `${req.query.alcohol}`;
  res.render('bar', { alcohol: alcohol, cocktails: cocktails.name });
});


app.listen(PORT, () => {
  console.log('You have awaken, the Son of Anton.');
});


const database = {
  todos: [
    'Get up',
    'Survive',
    'Go back to bed',
  ]
};

const alcoholList = ['gin', 'vodka', 'rum', 'tequila'];

const cocktails = [
  {
    name: 'GIN FIZZ',
    price: 1520,
    contains: ['gin', 'sugar', 'lemon juice', 'soda'],
    isAlcoholic: true,
  },
  {
    name: 'BLOODY MARY',
    price: 1650,
    contains: ['vodka', 'tomato juice', 'spices'],
    isAlcoholic: true,
  },
  {
    name: 'SEX ON THE BEACH',
    price: 1850,
    contains: [
      'vodka',
      'peach schnapps',
      'orange juice',
      'cranberry juice'
    ],
    isAlcoholic: true,
  },
  {
    name: 'CUBA LIBRE',
    price: 1850,
    contains: ['rum', 'cola', 'lime juice'],
    isAlcoholic: true,
  },
  {
    name: 'MOJITO',
    price: 1850,
    contains: ['rum', 'sugar', 'lime juice', 'soda water'],
    isAlcoholic: true,
  },
  {
    name: 'LONG ISLAND ICE TEA',
    price: 2450,
    contains: ['vodka', 'rum', 'gin', 'tequila', 'triple sec', 'cola'],
    isAlcoholic: true,
  },
  {
    name: 'VIRGIN MOJITO',
    price: 990,
    contains: ['sugar', 'lime juice', 'soda water'],
    isAlcoholic: false,
  },
  {
    name: 'SAFE SEX ON THE BEACH',
    price: 990,
    contains: ['peach schnapps', 'orange juice', 'cranberry juice'],
    isAlcoholic: false,
  },
];
