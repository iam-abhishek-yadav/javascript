const array = [732, 419, 587, 198, 234, 876, 123, 567, 890, 345, 678, 901, 234, 567, 890, 123, 456, 789, 234, 567, 890, 123, 456, 789, 234]

const findLargest = (array) => {
  let max = -Infinity
  for(const num of array){
    max = Math.max(max, num)
  }
  return max
}

console.log(findLargest(array))