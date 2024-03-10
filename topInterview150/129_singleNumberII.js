var singleNumber = function(nums) {
    let [ones, twos, threes] = [0, 0, 0]
    for (const num of nums) {
        twos |= (ones & num);
        ones ^= num;
        threes = (ones & twos);
        ones &= ~threes;
        twos &= ~threes;
    }
    return ones;
};
