// Q-26 in leetcode

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

const removeDuplicates = (array) => {
    let k = 1
    for(let i=1;i<nums.length;i++){
        if(nums[i] !== nums[i-1]) nums[k++] = nums[i]
    }
    return k
}

let k = removeDuplicates(array)
console.log(array.slice(0, k))
