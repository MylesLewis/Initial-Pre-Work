// Learned that you can chain together ternary operators to create complex conditional statements

function checkSign(num) {
  return (num > 0) ? "positive" : (num === 0) ? "zero" : "negative"
}

checkSign(10);
