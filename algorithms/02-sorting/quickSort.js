function quickSort(input, startIndex, endIndex) {
    if (startIndex < endIndex) {
        const pivotIndex = partition(input, startIndex, endIndex);
        quickSort(input, startIndex, pivotIndex - 1);
        quickSort(input, pivotIndex + 1, endIndex);
    }
  }
  
  function partition(arr, low, high) {
    const pivot = arr[low];
    let i = low;
    let j = high;
  
    while (i < j) {
        while (arr[i] <= pivot && i < high) {
            i++;
        }
  
        while (arr[j] > pivot && j > low) {
            j--;
        }
  
        if (i < j) {
            swap(arr, i, j);
        }
    }
  
    swap(arr, low, j);
    return j;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  let arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", arr);
  
  quickSort(arr, 0, arr.length - 1);
  
  console.log("Sorted Array:", arr);
  