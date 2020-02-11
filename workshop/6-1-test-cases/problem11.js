let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    x = 0;
    for (i=0; i<arr.length; i++){
        if (typeof arr[i] === 'number'){
            x += arr[i];
        }
    }
    return x;
}

// Test cases
let inputs = [[1, 2, 3, 4], [2, 3, 'r', 6], [], ['super', 8, 3, 'auto'], ['pop pop', 54, -2, 1, 1]];
let outputs = [10, 11, 0, 11, 54];

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
