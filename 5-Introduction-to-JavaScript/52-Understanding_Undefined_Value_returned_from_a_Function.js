// If a function doesn't have a return statement, whenver it is called, the function will proceess the inner code but return a value of undefined

// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum = sum + 5;
}


// Only change code above this line
var returnedValue = addFive();
