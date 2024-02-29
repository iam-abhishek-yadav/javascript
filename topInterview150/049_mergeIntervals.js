var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    for (let i = 0; i < intervals.length; i++) {
        let [start, end] = [intervals[i][0], intervals[i][1]];
        while (i + 1 < intervals.length && end >= intervals[i + 1][0]) {
            i++;
            end = Math.max(end, intervals[i][1]);
        }
        result.push([start, end]);
    }
    return result;
};

