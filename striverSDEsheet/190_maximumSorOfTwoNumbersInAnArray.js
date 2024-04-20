var findMaximumXOR = function(nums) {
    let max = 0;
    for (let i = 31; i >= 0; --i) {
        const mask = (~0 >>> i) << i;
        const set = new Set();
        for (let num of nums) {
            set.add(num & mask);
        }
        const maxCandidate = max | 1 << i;
        for (let num of set) {
            const another = maxCandidate ^ num;
            if (set.has(another)) {
                max = maxCandidate;
                break;
            }
        }
    }
    return max;
};

