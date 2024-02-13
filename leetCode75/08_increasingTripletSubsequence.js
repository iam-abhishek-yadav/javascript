var increasingTriplet = function(nums) {
    let [min, secondMin] = [Infinity, Infinity];

    for (const num of nums) {
        if (num <= min) {
            min = num;
        } else if (num <= secondMin) {
            secondMin = num;
        } else {
            return true;
        }
    }
    return false;
};
