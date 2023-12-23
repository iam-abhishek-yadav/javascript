const insertionSort = (arr) => {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            let temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
};
  
const arr = [2, 6, 4, 3, 2, -1, 23, -45];
insertionSort(arr);
console.log(arr);