function selectionSort(arr) {
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // find smallest element
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    // swap first element with smallest element
    if (min != i) {
      let tmp = arr[i]
      arr[i] = arr[min]
      arr[min] = tmp
    }
  }
  return arr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  console.log("Expecting: [1, 2, 3, 6, 17");
  console.log("=>", selectionSort([6, 3, 17, 2, 1]))

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];
  let start = new Date

  for (let i = 0; i < 100; ++i) {
    // selectionSort(Array.from({ length: i }, () => Math.floor(Math.random() * i)));
    longInput.push(Math.random());
    selectionSort(longInput)
  }

  let now = new Date
  console.log("")
  console.log("Run time:", (now - start) / 2000)
}

module.exports = selectionSort;
