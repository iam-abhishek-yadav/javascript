// Q-2149 in leetcode

var rearrangeArray = function(nums) {
    let arr = new Array(nums.length).fill(0);
    let pos = 0, neg = 1;

    for (let num of nums) {
        if (num < 0) {
            arr[neg] = num;
            neg += 2;
        } else {
            arr[pos] = num;
            pos += 2;
        }
    }

    return arr;
};

const numsExample = [1, -2, 3, -4, 5, -6];
const resultExample = rearrangeArray(numsExample);
console.log("Rearranged Array:", resultExample);