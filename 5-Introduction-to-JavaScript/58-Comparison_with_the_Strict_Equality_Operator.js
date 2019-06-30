// Learned about strict equality "===" as the counterpart to the equality operator, the strict equality operator does not perform any type conversion.

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
