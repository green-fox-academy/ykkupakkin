import * as test from 'tape';
import { countLetter } from './countletter';

test('Counts letters', t=> {
  const actual = countLetter('yolika');
  const expected = {
    'y' : 1,
    'o' : 1,
    'l' : 1,
    'i' : 1,
    'k' : 1,
    'a' : 1,
  }

  t.equal(actual, expected);
  t.end();
});