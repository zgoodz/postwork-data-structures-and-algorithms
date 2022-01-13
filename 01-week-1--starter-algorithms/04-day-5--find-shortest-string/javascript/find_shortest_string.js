function findShortestString(arr) {
  return arr.reduce((a, b) => a.length <= b.length ? a : b)
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
  const longInput = [];
  let start = new Date

  for (let i = 0; i < 100; ++i) {
    // selectionSort(Array.from({ length: i }, () => Math.floor(Math.random() * i)));
    longInput.push(Math.random());
    findShortestString(longInput)
  }

  let now = new Date
  console.log("")
  console.log("Run time:", (now - start) / 2000)
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution
