'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function rockPaperScissors(hand1, hand2) {

    let p1 = hand1.toLowerCase().trim()
    let p2 = hand2.toLowerCase().trim()

    if (p1 === p2) {
        return "It's a tie!"
    }

    if ((p1 === 'paper' && p2 === 'rock') || (p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors')) {
        return "Hand one wins!"
    }
    if ((p2 === 'paper' && p1 === 'rock') || (p2 === 'scissors' && p1 === 'paper') || (p2 === 'rock' && p2 === 'scissors')) {
        return "Hand two wins!"
    }


}

function getPrompt() {
    rl.question('hand1: ', (answer1) => {
        rl.question('hand2: ', (answer2) => {
            console.log(rockPaperScissors(answer1, answer2));
            getPrompt();
        });
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#rockPaperScissors()', () => {
        it('should detect a tie', () => {
            assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
            assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
            assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
        });
        it('should detect which hand won', () => {
            assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
            assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
        });
        it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
            assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
            assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
            assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
        });
    });
} else {

    getPrompt();

}