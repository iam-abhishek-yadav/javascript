var largestRectangleArea = function(heights) {
    let res = 0;
    const n = heights.length,stk = [];
    const left = new Array(n).fill(0),right = new Array(n).fill(n);

    for (let i = 0; i < n; ++i) {
        while (stk.length !== 0 && heights[stk[stk.length - 1]] >= heights[i]) {
            right[stk.pop()] = i;
        }
        left[i] = stk.length === 0 ? -1 : stk[stk.length - 1];
        stk.push(i);
    }

    for (let i = 0; i < n; ++i) {
        res = Math.max(res, heights[i] * (right[i] - left[i] - 1));
    }

    return res;
};
