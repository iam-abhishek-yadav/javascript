var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let end = intervals[0][1], ans = 0;
    for(let i=1;i<intervals.length;i++){
        const curr = intervals[i];
        if(end > curr[0]) ans++;
        else end = curr[1];
    }
    return ans;
};
