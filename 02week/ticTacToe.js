'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];

let playerTurn = 'X';


function printBoard() {
    console.log('   0  1  2');
    console.log('0 ' + board[0].join(' | '));
    console.log('  ---------');
    console.log('1 ' + board[1].join(' | '));
    console.log('  ---------');
    console.log('2 ' + board[2].join(' | '));
}


function horizontalWin() {
    if (
        (board[0][0] == 'X' && board[0][1] == 'X' && board[0][2] == 'X') ||
        (board[1][0] == 'X' && board[1][1] == 'X' && board[1][2] == 'X') ||
        (board[2][0] == 'X' && board[2][1] == 'X' && board[2][2] == 'X')
    ) {
        return true;
    } else if (
        (board[0][0] == 'O' && board[0][1] == 'O' && board[0][2] == 'O') ||
        (board[1][0] == 'O' && board[1][1] == 'O' && board[1][2] == 'O') ||
        (board[2][0] == 'O' && board[2][1] == 'O' && board[2][2] == 'O')
    ) { return true; } else {
        return false;
    }
}


function verticalWin() {
    if (
        (board[0][0] == 'X' && board[1][0] == 'X' && board[2][0] == 'X') ||
        (board[0][1] == 'X' && board[1][1] == 'X' && board[2][1] == 'X') ||
        (board[0][2] == 'X' && board[1][2] == 'X' && board[2][2] == 'X')
    ) { return true } else if (
        (board[0][0] == 'O' && board[1][0] == 'O' && board[2][0] == 'O') ||
        (board[0][1] == 'O' && board[1][1] == 'O' && board[2][1] == 'O') ||
        (board[0][2] == 'O' && board[1][2] == 'O' && board[2][2] == 'O')
    ) { return true } else {
        return false;
    }
}


function diagonalWin() {
    if (
        (board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
        (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X')
    ) { return true; } else if (
        (board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') ||
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')
    ) { return true }
}


function checkForWin() {

    if (
        verticalWin(true) || horizontalWin(true) || diagonalWin(true)) {
        return true
        console.log('Winner!')
    } else { "Stalemate" }
}

function ticTacToe(row, column) {
    board[row][column] = playerTurn;

    checkForWin();
    playerTurn = switchPlayer(playerTurn);



}

function switchPlayer(XO) {
    if (XO == 'X') {
        return 'O';
    } else if (XO == 'O') {
        return 'X';
    }
}


function getPrompt() {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
        rl.question('column: ', (column) => {
            testInput();
            ticTacToe(row, column);
            getPrompt();

        });
    });


}
//Trying to figure out how to add constraints to the users input
function testInput(row, column) {
    // If it's an invalid number
    if ((row || column) > 2) {
        console.log('Please enter a number from 0 to 2');
        return false;
        // If it's already taken
    } else if (board[row][column] !== ' ') {
        console.log('That spot is taken!');
        return false;
    } else {
        return true;
    }
}

// Tests

if (typeof describe === 'function') {

    describe('#ticTacToe()', () => {
        it('should place mark on the board', () => {
            ticTacToe(1, 1);
            assert.deepEqual(board, [
                [' ', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should alternate between players', () => {
            ticTacToe(0, 0);
            assert.deepEqual(board, [
                ['O', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', ' ']
            ]);
        });
        it('should check for vertical wins', () => {
            board = [
                [' ', 'X', ' '],
                [' ', 'X', ' '],
                [' ', 'X', ' ']
            ];
            assert.equal(verticalWin(), true);
        });
        it('should check for horizontal wins', () => {
            board = [
                ['X', 'X', 'X'],
                [' ', ' ', ' '],
                [' ', ' ', ' ']
            ];
            assert.equal(horizontalWin(), true);
        });
        it('should check for diagonal wins', () => {
            board = [
                ['X', ' ', ' '],
                [' ', 'X', ' '],
                [' ', ' ', 'X']
            ];
            assert.equal(diagonalWin(), true);
        });
        it('should detect a win', () => {
            assert.equal(checkForWin(), true);
        });
    });
} else {

    getPrompt();

}