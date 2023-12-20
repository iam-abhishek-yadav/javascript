const array = [1,2,3,4,5,6,7,8,9,10]

function linearSearch(array, target) {
  for(let i=0;i<array.length;i++) {
    if(array[i] === target) {
      return i
    }
  }
  return -1
}

console.log(linearSearch(array,2))
console.log(linearSearch(array,3))
console.log(linearSearch(array,11))