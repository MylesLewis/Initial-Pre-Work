// Learned how to create a card counting program to get me rich, quick.

var count = 0;

function cc(card) {
  // Only change code below this line
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count ++ +1;
        if (count >= 1){
          return count+" Bet";
        }
        else {
          return count+" Hold";
        }
    case 7:
    case 8:
    case 9:
       if (count >= 1){
          return count+" Bet";
        }
        else {
          return count+" Hold";
        }
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -- -1;
      if (count >= 1){
          return count+" Bet";
        }
        else {
          return count+" Hold";
        }
  }

  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
