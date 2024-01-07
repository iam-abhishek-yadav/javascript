function mergeSort(arr, l, r) {
    if (l >= r) return;
    const mid = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
  
  function merge(arr, l, mid, r) {
    const array = new Array(r - l + 1);
    let i = 0;
    let left = l, right = mid + 1;
  
    while (left <= mid && right <= r) {
        if (arr[left] < arr[right]) {
            array[i++] = arr[left++];
        } else {
            array[i++] = arr[right++];
        }
    }
  
    while (left <= mid) {
        array[i++] = arr[left++];
    }
  
    while (right <= r) {
        array[i++] = arr[right++];
    }
  
    for (let j = 0; j < array.length; j++) {
        arr[j + l] = array[j];
    }
  }
  
  let arr = [38, 27, 43, 3, 9, 82, 10];
  console.log("Original Array:", arr);
  
  mergeSort(arr, 0, arr.length - 1);
  
  console.log("Sorted Array:", arr);
  