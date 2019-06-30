// Learned that if variables are declared within a function they will have local scope instead of global scope

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
 var myVar
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope

// Now remove the console log line to pass the test
