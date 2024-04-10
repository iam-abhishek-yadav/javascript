function countingSort(arr) {
  let maxVal = Math.max(...arr);
  let count = new Array(maxVal + 1).fill(0);

  while (arr.length > 0) {
    let num = arr.shift();
    count[num]++;
  }

  let sortedArr = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      sortedArr.push(i);
      count[i]--;
    }
  }

  return sortedArr;
}

let unsortedArr = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
let sortedArr = countingSort(unsortedArr);
console.log("Sorted array:", sortedArr);
