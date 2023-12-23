const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) minIndex = j;
      }
      if (minIndex != i) {
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
      }
    }
  };
  
  const arr = [2, 6, 4, 3, 2, -1, 23, -45];
  selectionSort(arr);
  console.log(arr);
  