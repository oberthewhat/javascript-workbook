// Problem 1
console.log('--Problem 1')
let today = new Date();
let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
let dateTime = date + ' ' + time;
console.log(dateTime);


//Problem 2
console.log('--Problem 2')
let number = 7;
console.log(number.toString())


//Problem 3
console.log('--Problem 3')
number = '14';
console.log(number)

//Problem 4
console.log('--Problem 4')

// your variable
var myBool = true;
var myNull = null;
var myNumber = 88;
var myNaN = a;
var myString = "hello";
var myUndefined = undefined;

function isTypeOf(data) {
    return console.log(typeof data);
}
isTypeOf(myBool);
isTypeOf(myNull);
isTypeOf(myNumber);
isTypeOf(myNaN);
isTypeOf(myString);
isTypeOf(myUndefined);

//Problem 5
console.log('--Problem 5')

function add(x, y) {
    return (x + y)
}
let answer = add(5, 10)
console.log(answer)

//Problem 6
console.log('--Problem 6')

function both(a, b) {
    if (a && b) {
        console.log('Both are True')
    } else {
        console.log("one or more are false")
    }
}
both(true, true)

//Problem 7
console.log('--Problem 7')

function oneOf(c, d) {
    if (c || d) {
        console.log('One of them is true')
    } else {
        console.log('both are true or false')
    }
}
oneOf(true, false)

//Problem 8
console.log('--Problem 8')

function bothNot(e, f) {
    if (!e && !f) {
        console.log('Both are False')
    } else {
        console.log('One or more are true')
    }
}
bothNot(false, false)