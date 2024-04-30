var rearrangeArray = function(nums) {
    let pos = 0, neg = 1;
    const arr = new Array(nums.length).fill(0);
    for(const num of nums){
        if(num < 0){
            arr[neg] = num;
            neg += 2;
        } else {
            arr[pos] = num;
            pos += 2;
        }
    }
    return arr;
};
