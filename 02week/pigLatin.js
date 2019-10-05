'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//mycode
function pigLatin(word) {


    let newWord = word.toLowerCase().trim()

    var firstPosition = firstVowel(newWord);
    if (firstPosition > 0) {
        return newWord.slice(firstPosition) + newWord.slice(0, firstPosition) + 'ay'
    }
    return newWord + 'yay';


}

function firstVowel(newWord) {
    for (var i = 0; i < newWord.length; i++) {
        if ("aeiou".indexOf(newWord[i]) !== -1) {
            return i;
        }
    }
}

pigLatin('')
    //end of my code


function getPrompt() {
    rl.question('word ', (answer) => {
        console.log(pigLatin(answer));
        getPrompt();
    });
}

// Tests

if (typeof describe === 'function') {

    describe('#pigLatin()', () => {
        it('should translate a simple word', () => {
            assert.equal(pigLatin('car'), 'arcay');
            assert.equal(pigLatin('dog'), 'ogday');
        });
        it('should translate a complex word', () => {
            assert.equal(pigLatin('create'), 'eatecray');
            assert.equal(pigLatin('valley'), 'alleyvay');
        });
        it('should attach "yay" if word begins with vowel', () => {
            assert.equal(pigLatin('egg'), 'eggyay');
            assert.equal(pigLatin('emission'), 'emissionyay');
        });
        it('should lowercase and trim word before translation', () => {
            assert.equal(pigLatin('HeLlO '), 'ellohay');
            assert.equal(pigLatin(' RoCkEt'), 'ocketray');
        });
    });
} else {

    getPrompt();

}