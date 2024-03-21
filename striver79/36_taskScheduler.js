var leastInterval = function(tasks, n) {
    const cnt = new Array(26).fill(0);
    let x = 0;
    for (let i = 0; i < tasks.length; i++) {
        let c = tasks[i].charCodeAt(0) - 'A'.charCodeAt(0);
        ++cnt[c];
        x = Math.max(x, cnt[c]);
    }
    let s = 0;
    for (let v of cnt) {
        if (v === x) {
            ++s;
        }
    }
    return Math.max(tasks.length, (x - 1) * (n + 1) + s);
};
