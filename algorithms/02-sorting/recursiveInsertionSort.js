function insertionSort(arr, size) {
  for (let i = 1; i < size; i++) {
      let j = i;

      while (j > 0 && arr[j] < arr[j - 1]) {
          [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
          j--;
      }
  }
}

let arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);

insertionSort(arr, arr.length);

console.log("Sorted Array:", arr);
