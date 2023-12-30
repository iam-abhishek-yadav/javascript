//Q-493 in leetcode

var reversePairs = function(nums) {
    return mergeSortAndCount(nums, 0, nums.length - 1);

    function mergeSortAndCount(nums, startIndex, endIndex) {
        if (startIndex < endIndex) {
            const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
            let count = mergeSortAndCount(nums, startIndex, midIndex) +
                        mergeSortAndCount(nums, midIndex + 1, endIndex);
            let index1 = startIndex, index2 = midIndex + 1;

            while (index1 <= midIndex && index2 <= endIndex) {
                if (nums[index1] > 2 * nums[index2]) {
                    count += midIndex - index1 + 1;
                    index2++;
                } else {
                    index1++;
                }
            }

            merge(nums, startIndex, midIndex, endIndex);
            return count;
        } else {
            return 0;
        }
    }

    function merge(nums, startIndex, midIndex, endIndex) {
        const length = endIndex - startIndex + 1;
        const newArray = new Array(length);
        let index1 = startIndex, index2 = midIndex + 1;
        let index = 0;

        while (index1 <= midIndex && index2 <= endIndex) {
            newArray[index++] = nums[index1] <= nums[index2] ? nums[index1++] : nums[index2++];
        }

        while (index1 <= midIndex) {
            newArray[index++] = nums[index1++];
        }

        while (index2 <= endIndex) {
            newArray[index++] = nums[index2++];
        }

        for (let i = 0; i < length; i++) {
            nums[startIndex + i] = newArray[i];
        }
    }
};


const numsExample = [1, 3, 2, 3, 1];
const result = reversePairs(numsExample);

console.log("Number of Reverse Pairs:", result);
