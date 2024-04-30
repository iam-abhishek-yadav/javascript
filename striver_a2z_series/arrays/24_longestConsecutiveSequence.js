var longestConsecutive = function(nums) {
    let max = 0;
    const set = new Set(nums);
    for(const num of set){
        if(!set.has(num-1)){
            let [x, curr] = [num, 1];
            while(set.has(x + 1)){
                x++;
                curr++;
            }
            max = Math.max(max, curr);
        }
    }
    return max;
};
