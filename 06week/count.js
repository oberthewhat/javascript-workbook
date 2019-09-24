'use strict';


//get the variable from user input in the DOM
// var input = prompt('Please enter a word');
var input = 'hello'
var counts = {}
var v = []

input = input.toLocaleLowerCase().split('');
console.log(input)


input.forEach((v) => (counts[v] = (counts[v])? ++counts[v] : 1));

console.log(counts)


// var answer = String(counts[v])

// // console.log(answer)



//push the answer to the DOM
document.querySelector('.answer').innerHTML = counts