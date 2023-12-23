const array = [732, 419, 587, 198, 234, 876, 123, 567, 890, 345, 678, 901, 234, 567, 890, 123, 456, 789, 234, 567, 890, 123, 456, 789, 234]

const findSecondLargest = (array) => {
  let max = -Infinity, secondMax = -Infinity
  for(const num of array){
      if(num > max){
          secondMax = max;
          max = num;
      } else if(num < max && num > secondMax){
          secondMax = num;
      }
  }
  return secondMax;
}

console.log(findSecondLargest(array))