var reduce = function(nums, fn, init) {
    for(const num of nums){
        init = fn(init, num);
    }
    return init;
};
