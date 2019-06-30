// Learned about testing more than one thing at a time with the loguical and operator "&&" which only returns true of both the parameters to the left and right evaluate to trueOrFalse

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);
