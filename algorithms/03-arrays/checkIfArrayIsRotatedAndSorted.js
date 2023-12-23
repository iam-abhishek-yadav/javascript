const array = [8,9,10,1,2,3,4,5,6,7]

const checkIfArrayIsRotatedAndSorted = (array) => {
  let count = 0;
  for(let i=1;i<array.length;i++){
      if(array[i] < array[i-1]) count++;
  }
  if(count > 1) return false;
  return count == 0 ? true : array[0] >= array[array.length-1];
}

console.log(checkIfArrayIsRotatedAndSorted(array))