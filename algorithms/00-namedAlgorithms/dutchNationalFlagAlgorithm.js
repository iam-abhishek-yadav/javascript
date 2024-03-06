class Solution {
  threeWayPartition(array, a, b) {
      let [low, mid, high] = [0, 0, array.length - 1];
      while (mid <= high) {
          if (array[mid] < a) {
              [array[low], array[mid]] = [array[mid], array[low]];
              low++;
              mid++;
          } else if (array[mid] >= a && array[mid] <= b) {
              mid++;
          } else {
              [array[mid], array[high]] = [array[high], array[mid]];
              high--;
          }
      }
      return array;
  }
}

const solution = new Solution();
const inputArray = [1, 4, 3, 2, 5, 6, 8, 7];
const rangeStart = 3;
const rangeEnd = 6;

console.log("Original Array:", inputArray);
solution.threeWayPartition(inputArray, rangeStart, rangeEnd);
console.log("Partitioned Array:", inputArray);

