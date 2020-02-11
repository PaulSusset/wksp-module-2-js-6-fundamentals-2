let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  let str2 = str.toLowerCase();
  let arr = str2.split(' ')
  let arrOut = []
  for (i=0; i < arr.length; i++){
    arrOut.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
  }
  return arrOut.join(' ')
}

// Test cases
let inputs = ["hello world", "MY first page", "who iS ThiS", "WHat IS going oN", "ok"];
let outputs = ['Hello World', 'My First Page', 'Who Is This', 'What Is Going On', 'Ok'];

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
