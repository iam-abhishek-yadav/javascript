// Q-485 in leetcode

const findMaxConsecutiveOnes = (array) => {
    let max = 0, curr = 0
    for(let num of array){
        if(num == 1) curr++
        else curr = 0
        max = Math.max(max, curr)
    }
    return max
  }
  
const array = [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(array))