// Learned that in ES6 you can set variables with "let" so that if they change latter on in the program it'll throw an error. This is useful for debugging

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
