function minMeetingRooms(intervals) {
    const n = 1000010;
    const delta = new Array(n).fill(0);
    for (const [start, end] of intervals) {
        ++delta[start];
        --delta[end];
    }
    let res = delta[0];
    for (let i = 1; i < n; ++i) {
        delta[i] += delta[i - 1];
        res = Math.max(res, delta[i]);
    }
    return res;
}

