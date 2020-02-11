let verifyEquals = require('../../assets/verify-equals');

// Problem 7
// ---------
// Step 1
// - The function input is an array. 
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array. 
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function f(arr) {
    if (typeof arr[0] === 'string' && typeof arr[1] === 'number' && arr[1] > 0){
        let x = arr[0];
        for (i=1; i<arr[1]; i++){
            x = x.concat(arr[0]);
        };
        return x;
    }
    return undefined;
}

// Step 2
// We need 7 test cases.
// Don't forget to test all of the question parameters

let inputs = [['pa', 2], ['to', 6], ['pla', -1], ['4', 4], ['ja', -3], [true, 666], ['g', 0]];
let outputs = ['papa', 'totototototo', undefined, '4444', undefined, undefined, undefined];

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
runTest(5);
runTest(6);
console.log('All tests passed for ' + __filename);
