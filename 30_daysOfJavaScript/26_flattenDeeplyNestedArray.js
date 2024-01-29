var flat = function (arr, n) {
    if (n <= 0) return arr;
    const ans = [];
    for (const x of arr) {
        if (Array.isArray(x)) ans.push(...flat(x, n - 1));
        else ans.push(x)
    }
    return ans;
};

