// Learned about switch statements. Switch statements help you go between many different options (cases).
// A break tells javascript to stop executing statements. if the break is left out of a switch statment it'll move on to executing the next statement

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
caseInSwitch(1);
