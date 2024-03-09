var searchRange = function(nums, target) {
    const low = (nums, target) => {
        let [left, right] = [0, nums.length - 1];
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (nums[mid] >= target) right = mid - 1;
            else left = mid + 1;
        }
        return (left < nums.length && nums[left] === target) ? left : -1;
    }

    const high = (nums, target) => {
        let [left, right] = [0, nums.length - 1];
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (nums[mid] <= target) left = mid + 1;
            else right = mid - 1;
        }
        return (right >= 0 && nums[right] == target) ? right : -1;
    }

    return [low(nums, target), high(nums, target)];
};

