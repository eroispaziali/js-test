"use strict"; // uncomment this line to see an error thrown
 
function modify() {
  poison.arguments[0] = 100;
}
 
function poison(a, b) {
  modify();
  return a + b;
}

console.log(poison(1, 2));