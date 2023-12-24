// Q-268 in leetcode

const missingNumber = (array) => {
    let xor = 0, index = 0
    for(const num of array){
        xor ^= num
        xor ^= index++
    }
    return xor ^ index
  }
  
const array = [9,6,4,2,3,5,7,0,1]
console.log(missingNumber(array))