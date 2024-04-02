function quickSort(input, startIndex, endIndex) {
  if (startIndex < endIndex) {
      let pivotIndex = partition(input, startIndex, endIndex);
      quickSort(input, startIndex, pivotIndex - 1);
      quickSort(input, pivotIndex + 1, endIndex);
  }
}

function partition(arr, low, high) {
  let pivot = arr[low], i = low, j = high;
  while (i < j) {
      while (arr[i] <= pivot && i < high) i++;
      while (arr[j] > pivot && j > low) j--;
      if (i < j) swap(arr, i, j);
  }
  swap(arr, low, j);
  return j;
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
