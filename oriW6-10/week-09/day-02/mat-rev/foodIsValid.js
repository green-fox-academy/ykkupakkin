// ES6 module syntax
// export default function foodIsValid(food) {

function foodIsValid(food) {
  if (food == null) {
    return false;
  }

  if (food.name == null || food.name.length === 0) {
    return false;
  }

  food.amount = Number(food.amount);

  if (!isFinite(food.amount) || isNaN(food.amount) || food.amount < 0) {
    return false;
  }

  return true;
}

function print() {}

// node.js module syntax
module.exports = {
  // foodIsValid: foodIsValid, is the same
  foodIsValid,
  // somethingElse: print
};
