var maxPoints = function(points) {
    const n = points.length;
    let ans = 1;
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    for (let i = 0; i < n; ++i) {
        const [x1, y1] = points[i];
        const cnt = new Map();

        for (let j = i + 1; j < n; ++j) {
            const [x2, y2] = points[j];
            const dx = x2 - x1;
            const dy = y2 - y1;
            const g = gcd(dx, dy);

            const k = `${dx / g}.${dy / g}`;
            cnt.set(k, (cnt.get(k) || 0) + 1);
            ans = Math.max(ans, cnt.get(k) + 1);
        }
    }

    return ans;
};
