// Q-136 in leetcode

const singleNumber = (array) => {
    let xor = 0
    for(const num of array){
        xor ^= num
    }
    return xor
  }
  
const array = [1,2,3,4,3,2,1]
console.log(singleNumber(array))