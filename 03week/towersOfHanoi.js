'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// This is an object, "stacks",  that contains properties "a, b, and c", that are arrays.

let stacks = {
  a: [4, 3, 2, 1], 
  b: [],
  c: []
};

//console.log for my brain while playing the game. Helps space things out on the console. 

console.log('===========================================================================')
console.log('hello! To play, choose row "a" and place peice onto row, "b" or "c". Then move around the numbers until you create a stack on the other rows. You can not place a larger number on top of a smaller number. Good luck!')
console.log('===========================================================================')

// This is the function that prints the playing board to the console. 

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


//my move function. takes in startStack and endStack. what is taken in the pop method and stores it into a variable called popped. then pushes the popped variable onto the stack of the users choice. 


function movePiece(startStack, endStack) {

  let popped = stacks[startStack].pop()
  stacks[endStack].push(popped)

}

//my isLegal function checks to see if the user has made an illegal move by placing a larger number on top of a small. 

function isLegal(startStack, endStack){
  let endArray = stacks[endStack];  //This stores the number in the users selection into a variable to compare in my if statement. 
  let startArray = stacks[startStack];

  if (endArray[endArray.length -1] > startArray[startArray.length -1] || endArray.length == 0){ //this looks at the last number in the end row and compares it to the users selection. if everything is okay, then the move is accepted and it returns true. 
    return true
  } else {
    console.log('A larger number can not be on top of a smaller number') // If the stipulations are not met, the function does not allow the move and just logs to the console. 
    return false;
  }

}

function isValid(startStack){ //I made a seperate function to check for a valid imput. This makes sure the input is only within my options in the array, "legal". 
  let lower = startStack.toLowerCase()
  let legal = ['a','b','c'] //why is this messing up when i use uppercase
  for (let i=0; i < legal.length; i++){
    if(startStack == legal[i]){
    return true;
  } 
  
};
console.log('Please enter only A, B or C')
return false;
}

function checkForWin() {

  
let winner = [4, 3, 2, 1];
let winC = true;
let winB = true;
if(stacks.c.length == 4){
  for(let i = 0; i < stacks.c.length; i++){
    console.log('c', winner[i], stacks.c[i])
    if(winner[i] !== stacks.c[i]){
      winC = false;

    }}
  } else {
    winC = false
  }

  if(stacks.b.length == 4){
    for(let i = 0; i < stacks.b.length; i++){
      console.log('b', winner[i], stacks.b[i])
      if(winner[i] !== stacks.b[i]){
        winB = false;
  
      }}
    } else {
      winB = false
    }

console.log("---------------")
console.count(' Turn: ')
console.log("---------------")
if(winB || winC){
console.log('!!!!!!WINNER!!!!!!!')

stacks = {
  a: [4, 3, 2, 1], 
  b: [],
  c: []
};

return true
} else {
  return false
};
return winB || winC;


}

function towersOfHanoi(startStack, endStack) {
  if (isValid(startStack) && isValid(endStack) && isLegal(startStack,endStack)){

    movePiece(startStack,endStack);
    checkForWin()

  } 
}


function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}



// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
