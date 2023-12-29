// Q-229 in leetcode

var majorityElement = function(nums) {
    if (nums.length === 0) {
        return [];
    }

    let cnt1 = 0, cnt2 = 0, ele1 = Infinity, ele2 = Infinity;

    for (const num of nums) {
        if (cnt1 === 0 && num !== ele2) {
            cnt1 = 1;
            ele1 = num;
        } else if (cnt2 === 0 && num !== ele1) {
            cnt2 = 1;
            ele2 = num;
        } else if (num === ele1) {
            cnt1++;
        } else if (num === ele2) {
            cnt2++;
        } else {
            cnt1--;
            cnt2--;
        }
    }

    cnt1 = 0;
    cnt2 = 0;

    for (const num of nums) {
        if (num === ele1) cnt1++;
        if (num === ele2) cnt2++;
    }

    let req = nums.length / 3;
    const arr = [];

    if (cnt1 > req) arr.push(ele1);
    if (cnt2 > req) arr.push(ele2);

    return arr;
};

const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majorityResult = majorityElement(nums);
console.log(`Majority Elements in the array:`);
console.log(majorityResult);