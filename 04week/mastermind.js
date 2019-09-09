'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
    if(board.length > 10){
      console.log("You are out of turns!")
    }
}}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
let solutionArray = solution.split('');
let guessArray = guess.split('');
let correctLetterLocations = 0;
let correctLetters = 0;
let hint;

for(let i = 0; i < solutionArray.length; i++){
  if (solutionArray[i] == guessArray[i]){
    correctLetterLocations ++;
    solutionArray[i] = null;
  }  
}
for(let i = 0; i < solutionArray.length; i++){
  let targetIndex = solutionArray.indexOf(guessArray[i]);
  if(targetIndex > -1){
    correctLetters ++;
    solutionArray[targetIndex] = null;
  }
}
hint = `${correctLetterLocations}-${correctLetters}`
// console.log(hint);
board.push(hint + ' ' + guess)
return hint;
}

function mastermind(guess) {  //looks at guess and matches with the solution. 
  solution = 'abcd'
if(solution == guess){
  let winString ='You guessed it!' 
  console.log(winString)
  return winString
}
  
  printBoard();
  generateHint(guess);

}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    guess = guess.toLowerCase();
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
