//if you want to play the game, navigate into the this folder in your terminal and type in `npm i`, and hit enter
'use strict';
const fs = require('fs');
import { rword } from 'rword';
const startingLife = 6;

function gameLogic(): void {
  const inputLetter = process.argv[2];
  const hangingBoards = getHangingBoards();
  let state = getGameState();
  if (!inputLetter || inputLetter.length > 1) {
    printGameState(state, hangingBoards);
  } else if (state[0].indexOf(inputLetter) === -1) {
    state = decrementLife(state);
    printGameState(state, hangingBoards);
    setGameState(state);
    if (parseInt(state[2]) === 0) {
      startNewGame();
    }
  } else if (state[0].indexOf(inputLetter) !== -1) {
    state = revealLetter(inputLetter, state);
    printGameState(state, hangingBoards);
    setGameState(state);
    if (state[0] === state[1]) {
      startNewGame();
    }
  }
}

function printGameState(state: string[], status: string[]): void {
  console.clear();
  console.log(status[startingLife - parseInt(state[2])]);
  if (parseInt(state[2]) > 0) {
    console.log('Your word: ' + state[1]);
  } else if (state[0] === state[1]) {
    console.log('Victory!');
  } else {
    console.log('Your word was: ' + state[0]);
  }
}

function startNewGame(): void {
  let newWord = generateRandomWord();
  let mistery = '';
  for (let i = 0; i < newWord.length; i++) {
    mistery += '_';
  }
  let fileContent = `${newWord} ${mistery} 6`;
  writeFile('./gameState.txt', fileContent)
}

function revealLetter(inputLetter: string, state: string[]): string[] {
  const myWord = state[0];
  let wordToGuess = state[1].split('');
  for (let i = 0; i < wordToGuess.length; i++) {
    if (myWord.charAt(i) === inputLetter) {
      wordToGuess[i] = inputLetter;
    }
  }
  state[1] = wordToGuess.join('');
  return state;
}

function generateRandomWord(): string {
  return rword.generate(2, { length: '6-10' })[0];
}

function getHangingBoards(): string[] {
  let fileContent = readFile('./hangman.txt');
  let hangingBoards = fileContent.split(/\n{2,}/g);
  return hangingBoards;
}

function getGameState(): string[] {
  let fileContent = readFile('./gameState.txt');
  return fileContent.split(' ');
}

function setGameState(gameState: string[]): void {
  writeFile('./gameState.txt', gameState.join(' '));
}

function decrementLife(gameState: string[]): string[] {
  const myState = [...gameState];
  const currentLife = parseInt(myState[2]);
  const decrementedLife = currentLife - 1;
  myState[2] = decrementedLife + '';
  return myState;
}

function readFile(path: string): string {
  let fileContent = ''
  try {
    fileContent = fs.readFileSync(path, 'utf-8');
  } catch (e) {
    console.log('Hallod teso, hozd letre a filet!');
  };
  return fileContent;
}

function writeFile(path: string, fileContent: string): void {
  try {
    fs.writeFileSync(path, fileContent);
  } catch (e) {
    console.log('Ajjaj');
  }
}


gameLogic();

