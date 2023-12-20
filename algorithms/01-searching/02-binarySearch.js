const array = [1,2,3,4,5,6,7,8,9,10]

const binarySearch = (array, target) => {
  let low = 0, high = array.length-1;
  while(low <= high){
      let mid = low + Math.floor((high-low)/2);
      if(array[mid] == target){
          return mid;
      }
      else if(target > array[mid]){
          low = mid+1;
      }
      else{
          high = mid-1;
      }
  }
  return -1;
}

console.log(binarySearch(array,2))
console.log(binarySearch(array,3))
console.log(binarySearch(array,11))