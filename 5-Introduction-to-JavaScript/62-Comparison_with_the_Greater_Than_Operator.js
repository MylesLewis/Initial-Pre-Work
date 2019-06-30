// Learned about the comparison operator "greater than" and how it compares the number on the left to see if it is greater than the numbner on the right and if true it returns trueOrFalse

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

// Change this value to test
testGreaterThan(10);
