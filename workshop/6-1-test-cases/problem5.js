let verifyEquals = require('../../assets/verify-equals');

// Problem 5
// ---------
// Step 1
// Write a function that accepts an array of two values and returns those two numbers multiplied. 
// - The input of the function is an array.
// - If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.

function f(input) {
    if (typeof input[0] === 'number' && typeof input[1] === 'number' && input.length === 2){
        return input[0]*input[1];
    }
    return undefined;
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 7], [3, 1, 5], [7, 5], [2, -5], ['hi', 'john']];
let outputs = [14, undefined, 35, -10, undefined];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
