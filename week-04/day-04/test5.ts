import * as test from 'tape';
import { countLetter } from './countletter';

test('Counts letters', t=> {
  const actual = countLetter('yolika');
  const expected = {
    'o' : 1,
    'y' : 1,
    'i' : 1,
    'l' : 1,
    'a' : 1,
    'k' : 1,
  }

  t.deepEqual(actual, expected);
  t.end();
});