import * as test from 'tape';
import { Apples } from './apples';

test('print out apple', t => {
  const apple = new Apples();

  var actual = apple.getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();

});