// Learned about adding a default option in switch statements. The default statement is what executes if no matching case statements are found. This is useful if you don't necessarilly know all the different possible values to list as case statements.

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 'a':
    answer = "apple";
    break;

    case 'b':
    answer = "bird";
    break;

    case 'c':
    answer = "cat";
    break;

    default :
    answer = "stuff";
    break;
  }

  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
