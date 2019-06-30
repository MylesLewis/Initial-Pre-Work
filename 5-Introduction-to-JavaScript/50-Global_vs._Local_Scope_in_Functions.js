// Learned that it is possible to have local and global variabels with the same name and that when this is done the local variable take precedence over the global variables

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
