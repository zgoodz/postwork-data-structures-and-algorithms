function findFirstDuplicate(arr) {
  // create Set object
  let elementSet = new Set();

  // loop through array and compare in Set object
  // if match, return result, else, add it to the Set
  for (let i = 0; i < arr.length; i++) {
    if (elementSet.has(arr[i])) return arr[i];
    elementSet.add(arr[i]);
  }

  // if no duplicates, return -1
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: 'add'");
  console.log("=>", findFirstDuplicate(['first', 'add', 'second', 'add', 'third']));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
