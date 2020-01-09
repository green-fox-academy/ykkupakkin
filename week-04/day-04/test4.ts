import * as test from 'tape';
import { Anagram } from './anagram';

test('check if two string are anagram', t =>{
  const anagram = new Anagram('petike','iketep');

  let actual = anagram.anagram();
  let expected = true;

  t.equal(actual, expected);
  t.end();
});