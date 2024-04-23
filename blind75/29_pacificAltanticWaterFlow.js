var pacificAtlantic = function(heights) {
    const result = [];
    const pacific = new Array(heights.length).fill(null).map(() => new Array(heights[0].length).fill(false));
    const atlantic = new Array(heights.length).fill(null).map(() => new Array(heights[0].length).fill(false));

    const flow = (mark, prevHeight, i, j) => {
        if (i < 0 || i >= heights.length || j < 0 || j >= heights[0].length || mark[i][j] || heights[i][j] < prevHeight) return;
        mark[i][j] = true;
        flow(mark, heights[i][j], i + 1, j);
        flow(mark, heights[i][j], i - 1, j);
        flow(mark, heights[i][j], i, j + 1);
        flow(mark, heights[i][j], i, j - 1);
    };

    for (let i = 0; i < heights.length; i++) {
        flow(pacific, Number.MIN_SAFE_INTEGER, i, 0);
        flow(atlantic, Number.MIN_SAFE_INTEGER, i, heights[0].length - 1);
    }
    for (let i = 0; i < heights[0].length; i++) {
        flow(pacific, Number.MIN_SAFE_INTEGER, 0, i);
        flow(atlantic, Number.MIN_SAFE_INTEGER, heights.length - 1, i);
    }
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result.push([i, j]);
            }
        }
    }
    return result;
};
