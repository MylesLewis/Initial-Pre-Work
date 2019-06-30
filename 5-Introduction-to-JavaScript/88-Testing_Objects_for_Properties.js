/* Learned how to test different objects to see if certain properties exist within them through Using
.hasOwnProperty(propname) to returen either true or false */

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)){
    return myObj[checkProp];
  }
  else {
    return "Not Found";
  }
  return "Change Me!";
}

// Test your code by modifying these values
checkObj("gift");
