var shoutIt = function (name) {
  var shout = `Hello, ${name}, nice to meet you!`.toUpperCase();
  return shout;
};

// console.log(shoutIt("Anwar"));
// console.log(shoutIt("AJ"));

var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
  return `Please enter 2 numbers for this function.`;
  } else if (typeof num2 !== "number") {
  return `Please enter 2 numbers.`;
  }
  return num1 * num2;
};

