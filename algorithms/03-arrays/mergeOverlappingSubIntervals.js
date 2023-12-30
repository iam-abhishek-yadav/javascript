// Q-56 in leetcode

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let count = 0;

    for (let i = 0; i < intervals.length; i++) {
        if (i === 0 || intervals[i][0] > intervals[count - 1][1]) {
            intervals[count++] = intervals[i];
        } else {
            intervals[count - 1][1] = Math.max(intervals[count - 1][1], intervals[i][1]);
        }
    }

    return intervals.slice(0, count);
};

const exampleIntervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
];

const mergedIntervals = merge(exampleIntervals);
console.log("Merged Intervals:", mergedIntervals);
