function linearSearch(arr, targetVal) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetVal) {
      return i;
    }
  }
  return -1;
}

let arr = [3, 7, 2, 9, 5];
let targetVal = 9;

let result = linearSearch(arr, targetVal);

if (result !== -1) {
  console.log("Value", targetVal, "found at index", result);
} else {
  console.log("Value", targetVal, "not found");
}
