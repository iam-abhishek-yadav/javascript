var largestAltitude = function(gain) {
    let max = 0, prefix = 0;
    for (let i = 0; i < gain.length; i++) {
        prefix += gain[i];
        max = Math.max(max, prefix);
    }
    return max;
};

