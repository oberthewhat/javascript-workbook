'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Checkers() {
  
}


class Board {
  constructor() {
    this.grid = []
    this.redPiece = 'R',
    this.blackPiece = 'B',
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column])
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  } 



  starterPieces() {


    //laying out the red pieces. Likely not the most effective way to do this. 

  for(let row1 = 0; row1 < 3; row1++){
    for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 0 && col1 %2 == 1){
          this.grid[row1][col1] = this.redPiece 
          this.checkers.push(this.redPiece)
        }
     }
   }
   for(let row1 = 1; row1 < 2; row1++){
    for(let col1 = 0; col1 < 8; col1++){
        if(row1 % 2 == 1 && col1 %2 == 0){
          this.grid[row1][col1] = this.redPiece
          this.checkers.push(this.redPiece)
        }
     }
   }

   //laying out black pieces
   for(let row2 = 5; row2 < 8; row2++){
    for(let col2 = 0; col2 < 8; col2++){
        if(row2 % 2 == 1 && col2 %2 == 0){
          this.grid[row2][col2] = this.blackPiece
          this.checkers.push(this.blackPiece)
        }
     }
   }
   for(let row2 = 6; row2 < 7; row2++){
    for(let col2 = 0; col2 < 8; col2++){
        if(row2 % 2 == 0 && col2 %2 == 1){
          this.grid[row2][col2] = this.blackPiece
          this.checkers.push(this.blackPiece)
        }
     }
   }
  }


}

class Game {
  constructor() {
    this.board = new Board;
    this.player = "B"   //sets first player to B
  }
  start() {
    this.board.createGrid();
    this.board.starterPieces();
  }
 moveChecker(whichPiece, toWhere){

    var whichPieceArr = whichPiece.split('');  //breaks the string into an array
    var toWhereArr = toWhere.split('');
    var chosen = this.board.grid[whichPieceArr[0]][whichPieceArr[1]] // puts the players piece they want to move into a variable


    //This is my move function. It checks the piece that was chosen follows all my restrictions set up in my valid move function and jump move function. It also prevents the same players pieces to be moved back to back. Then changes the player turn. 
  if(chosen === this.player && this.validInput(whichPiece, toWhere) && this.validMove(whichPiece,toWhere) || this.jumpMove(whichPiece, toWhere)){
   this.board.grid[toWhereArr[0]][toWhereArr[1]] = chosen
   this.board.grid[whichPieceArr[0]][whichPieceArr[1]] = null;
   this.playerTurn()
} else {

}
 }

 // checks to see if the numbers selected by the user are within the limits of the array. 
validInput(whichPiece, toWhere){
  var whichPieceArr = whichPiece.split('');
  var toWhereArr = toWhere.split('');
  if(whichPiece.length !== 2 || whichPieceArr[0] > 7 || whichPieceArr[1] > 7){
    console.log('Please enter numbers less than 8')
    return false;
  }
  if(toWhere.length !== 2 || toWhereArr[0] > 7 || toWhereArr[1] > 7){
    console.log('Please enter numbers less than 8')
    return false;
  }
  return true;

}
jumpMove(whichPiece,toWhere){
  var whichPieceArr = whichPiece.split('');
  var toWhereArr = toWhere.split('');
  var chosen = this.board.grid[whichPieceArr[0]][whichPieceArr[1]];
  var dropSpot = this.board.grid[toWhereArr[0]][toWhereArr[1]];

  // these change the numbers in the array from a string to an integer and check the spot in within a legal move.

  var redJumpRight = this.board.grid[Number(whichPieceArr[0]) +1][Number(whichPieceArr[1]) +1] 
  var redJumpLeft = this.board.grid[Number(whichPieceArr[0]) +1][Number(whichPieceArr[1]) -1]
  var blackJumpRight = this.board.grid[Number(whichPieceArr[0]) -1][Number(whichPieceArr[1]) +1]
  var blackJumpLeft = this.board.grid[Number(whichPieceArr[0]) -1][Number(whichPieceArr[1]) -1]


  // prevents a player from chosing an empty spot or from dropping onto a spot that already has a piece. 
  if(chosen == null){
    return false;
    }
    if(dropSpot !== null){
      return false;
    
    }
    
    // player move for the B piece. If the players piece is B, this checks if they want to jump a piece that is R. This also allows the jump over of the piece of a different color, then removes that piece from the board.
    if(chosen == 'B'){
      if(whichPiece - toWhere !== 18 && whichPiece - toWhere !== 22)
    {
        return false
      } else {
        if(blackJumpRight === 'R' && whichPiece - toWhere === 18){
          blackJumpRight = null
          return true;
        } 
        if(blackJumpLeft === 'R' && whichPiece - toWhere === 22){
          blackJumpLeft = null
          return true;
        }
        else { 
          console.log('You can not jump over an empty space or your own piece')
          return false;
        } 
        
      }
    }



    if(chosen == 'R'){
      if(toWhere - whichPiece !== 18 && toWhere - whichPiece !== 22){
        return false
      } else {
        if(redJumpRight === 'B' && whichPiece - toWhere === 22){
          redJumpRight = null
        }
        if(redJumpLeft === 'B' && whichPiece - toWhere === 18){
          redJumpLeft = null
        }         
        else { 
          console.log('You can not jump over an empty space or your own piece')
        } 

    }
    
    }
}

// valid move makes sure the spots are not empty and that the player is only trying to move to the spot that is diagonally connected. 

validMove(whichPiece, toWhere){
  var whichPieceArr = whichPiece.split('');
  var toWhereArr = toWhere.split('');
  var chosen = this.board.grid[whichPieceArr[0]][whichPieceArr[1]];
  var dropSpot = this.board.grid[toWhereArr[0]][toWhereArr[1]];

  
if(chosen == null){
return false;
}
if(dropSpot !== null){
  return false;

}

if(chosen == 'B'){
  if(whichPiece - toWhere !== 9 && whichPiece - toWhere !== 11)
  {
    return false
  }
}
if(chosen == 'R'){
  if(toWhere - whichPiece !== 9 && toWhere - whichPiece !== 11){
    return false
  }
}
return true

}

// changes players 
playerTurn(){
  if(this.player === 'B'){
    this.player = 'R'
    console.log('#######  Red player turn  #######')
  } else{
    this.player = 'B'
    console.log('#######  Black player turn  #######')
  }
}

}



function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}


const game = new Game();
game.start();

//*********************************************************************************************************
// TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST
//*********************************************************************************************************
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
