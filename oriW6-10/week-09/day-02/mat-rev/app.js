const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { foodIsValid } = require('./foodIsValid');

// ES6 syntax
// import { foodIsValid } from './foodIsValid';

app.use(bodyParser.json());

let foodCounter = 1;
let foods = [{ id: 1, name: 'Chicken breast', amount: 300 }];

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api/foods', (req, res) => res.json(foods));
app.post('/api/foods', (req, res) => {
  let food = req.body;

  if (!foodIsValid(food)) {
    res.status(400).send();
    return;
  }

  food.id = nextId();

  foods.push(food);

  res.json(food);
});

app.put('/api/foods/:id', (req, res) => {
  let food = req.body;
  let foodId = req.params.id;

  if (foodId == null) {
    res.status(400).send();
    return;
  }

  if (!foodIsValid(food)) {
    res.status(400).send();
    return;
  }

  storedFood = foods.find(f => f.id == foodId);

  if (storedFood == null) {
    res.status(404).send();
    return;
  }

  storedFood.name = food.name;
  storedFood.amount = food.amount;

  res.json(storedFood);
});

app.delete('/api/foods/:id', (req, res) => {
  let foodId = req.params.id;

  if (foodId == null) {
    res.status(400).send();
    return;
  }

  storedFood = foods.find(f => f.id == foodId);

  if (storedFood == null) {
    res.status(404).send();
    return;
  }

  foods = foods.filter(food => food.id != foodId);

  res.status(204).send();
});

module.exports = app;

function nextId() {
  return ++foodCounter;
}
