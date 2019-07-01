// Learned about rest operators that can take a variable number of arguments that are storeed for later access

const sum = (function() {
  "use strict";
  return function sum(...args) {

    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
