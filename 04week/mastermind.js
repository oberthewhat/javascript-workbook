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
      console.log("You are out of turns!") //this didnt work.
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
let solutionArray = solution.split('');  //turns solution into an array
let guessArray = guess.split('');        //turns guess into an array
let correctLetterLocations = 0;
let correctLetters = 0;
let hint;

for(let i = 0; i < solutionArray.length; i++){ //looks through the array and checks how many similar characters there are
  if (solutionArray[i] == guessArray[i]){
    correctLetterLocations ++;
    solutionArray[i] = null;
  }  
}
for(let i = 0; i < solutionArray.length; i++){  //looks through the arrays and checks if the index of the arrays match
  let targetIndex = solutionArray.indexOf(guessArray[i]); //assigns the index number to each letter in the arracy
  if(targetIndex > -1){             // if index matches the number will be 0 or greater.
    correctLetters ++;
    solutionArray[targetIndex] = null;
  }
}
hint = `${correctLetterLocations}-${correctLetters}`  //adds a string to my hint variable
board.push(hint + ' ' + guess)   //pushes the string to the board.
return hint;
}

function mastermind(guess) {  //looks at guess and matches with the solution. why do i have to keep the solution abcd? according to the workbook instructions.
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
