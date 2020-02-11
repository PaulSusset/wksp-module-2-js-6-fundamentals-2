let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
//      Lorem ipsumos dolor sit amet consectetur
//      adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

function f(str) {
  x = '\n'
  if (str[40] === ' '){
    str = [str.slice(0, 40) + x + str.slice(41)].join('');
  } else {
    str = [str.slice(0, 40) + x + str.slice(40)].join('');
  }
  return str;

  
}

// Test cases
let inputs = ["Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam", 'No code changes below. This is the actual test that will run your test cases', 'Make this function return the input string wrapped to 40 characters per line', 'If the next character after a cut is a space, then do not display it.', '123456789101112131415161718192021222324252627282930'];
let outputs = ["Lorem ipsumos dolor sit amet consectetur\nadipisicing elit. Magni quisquam", 'No code changes below. This is the actua\nl test that will run your test cases', 'Make this function return the input stri\nng wrapped to 40 characters per line', 'If the next character after a cut is a s\npace, then do not display it.', '1234567891011121314151617181920212223242\n52627282930'];

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
