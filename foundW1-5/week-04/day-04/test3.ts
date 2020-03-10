import * as test from 'tape';
import { SumArr } from './sum';

test('add an array of numbers', t => {
  const sum = new SumArr();

  let actual = sum.sum([1, 2, 3, 4]);
  let expected = 10;
  
  t.equal(actual, expected);
  t.end();

});

test('add an array of numbers', t => {
  const sum = new SumArr();

  let actual = sum.sum([1]);
  let expected = 1;
  
  t.equal(actual, expected);
  t.end();

});

test('add an array of numbers', t => {
  const sum = new SumArr();

  let actual = sum.sum([]);
  let expected = 0;
  
  t.equal(actual, expected);
  t.end();

});