function bubbleSort(arr, n) {
    if (n === 1) return;
  
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
  
    bubbleSort(arr, n - 1);
  }
  
  let arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", arr);
  
  bubbleSort(arr, arr.length);
  
  console.log("Sorted Array:", arr);
  