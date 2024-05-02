var reversePairs = function(nums) {
    const countPairs = (arr, low, mid, high) => {
        let right = mid + 1;
        let cnt = 0;
        for (let i = low; i <= mid; i++) {
            while (right <= high && arr[i] > 2 * arr[right]) right++;
            cnt += right - (mid + 1);
        }
        return cnt;
    }
    const mergeSortAndCount = (nums, startIndex, endIndex) => {
        if (startIndex < endIndex) {
            const midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
            let count = mergeSortAndCount(nums, startIndex, midIndex) +
                        mergeSortAndCount(nums, midIndex + 1, endIndex);
            count += countPairs(nums, startIndex, midIndex, endIndex);
            merge(nums, startIndex, midIndex, endIndex);
            return count;
        } else {
            return 0;
        }
    }

    const merge = (nums, startIndex, midIndex, endIndex) => {
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
    return mergeSortAndCount(nums, 0, nums.length - 1);
};
