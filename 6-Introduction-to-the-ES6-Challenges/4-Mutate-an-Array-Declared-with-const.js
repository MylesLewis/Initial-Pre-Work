// Learned that const variables are still mutable it's just that const prevents reassignment of the variable identifier

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
   //s[0,1,2] = [2, 5, 7]; // <- this is invalid

  // change code above this line
}
editInPlace();
