let myArray = [64, 34, 25, 12, 22, 11, 90, 5];
let n = myArray.length;

for (let i = 0; i < n; i++) {
  let minIndex = i;
  for (let j = i + 1; j < n; j++) {
    if (myArray[j] < myArray[minIndex]) {
      minIndex = j;
    }
  }
  [myArray[i], myArray[minIndex]] = [myArray[minIndex], myArray[i]];
}

console.log("Sorted array:", myArray);
