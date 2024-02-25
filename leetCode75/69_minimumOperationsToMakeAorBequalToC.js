var minFlips = function(a, b, c) {
    let flips = 0;
    for (let i = 0; i < 30; ++i) {
        const x = (a >> i) & 1;
        const y = (b >> i) & 1;
        const z = (c >> i) & 1;
        if ((x | y) !== z) {
            flips += (x === 1 && y === 1) ? 2 : 1;
        }
    }
    return flips;
};
