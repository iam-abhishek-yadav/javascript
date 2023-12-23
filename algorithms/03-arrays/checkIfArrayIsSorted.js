const array = [1,2,3,4,5,6,7,8,9,10]

const checkIfArrayIsSorted = (array) => {
  for(let i=1;i<array.length;i++){
    if(array[i] < array[i-1]) return false
  }
  return true
}

console.log(checkIfArrayIsSorted(array))