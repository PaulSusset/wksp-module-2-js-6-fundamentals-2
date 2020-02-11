let verifyEquals = require('../../assets/verify-equals');

// Problem 8
// ---------
// Write a function that returns the input string, reversed.
// For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
// You must use at least one for loop for this exercise.
// HINTS: 
//  - Split your string into an array of characters
//  - Create an empty array
//  - Loop over the array of split characters in reverse order and fill the empty array by pushing each character into it
//  - Convert the filled array into a string (use the join method) and return it

function f(str) {
    arr = str.split('');
    arrOut = [];
    for (i=0; i<arr.length; i++){
        arrOut.push(arr[arr.length-(i+1)])
    }
    return arrOut.join('');
}

// We need 5 test cases.
let inputs = ['Paul', 'Let us begin', 'what?', 'please make it stop', '2020'];
let outputs = ['luaP', 'nigeb su teL', '?tahw', 'pots ti ekam esaelp', '0202'];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log('All tests passed for ' + __filename);
