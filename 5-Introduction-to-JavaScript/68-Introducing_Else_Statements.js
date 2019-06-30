// Learned about else statements and how they can be added to if statements to that instead of a piece of code just doing nothing, it instead runs an alternative piece of Code

function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(4);
