function fibonacci(num) {
  // start with 0 and 1
  if (num < 2) return num;

  let a = 0, b = 1, total;
  while (num >= 2){
    total = a + b;
    a = b;
    b = total;
    num--;
  }
  return total
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
