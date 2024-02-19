var maxLevelSum = function(root) {
    const queue = [root];
    let res = 1;
    let max = -Infinity;
    let h = 1;
    while (queue.length !== 0) {
        const n = queue.length;
        let sum = 0;
        for (let i = 0; i < n; i++) {
            const { val, left, right } = queue.shift();
            sum += val;
            left && queue.push(left);
            right && queue.push(right);
        }
        if (sum > max) {
            max = sum;
            res = h;
        }
        h++;
    }
    return res;
};

