var majorityElement = function(nums) {
    let candidate, count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        count += (num === candidate) ? 1 : -1;
    }

    count = 0;
    for (let num of nums) {
        if (num === candidate) {
            count++;
        }
    }

    if (count > nums.length / 2) {
        return candidate;
    }

    return -1;
};

