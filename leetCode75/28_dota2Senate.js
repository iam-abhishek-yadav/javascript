var predictPartyVictory = function(senate) {
    const radiantQueue = [];
    const direQueue = [];
    const n = senate.length;

    for (let i = 0; i < n; i++) {
        senate[i] === 'R' ? radiantQueue.push(i) : direQueue.push(i);
    }

    while (radiantQueue.length > 0 && direQueue.length > 0) {
        const radiantIndex = radiantQueue.shift();
        const direIndex = direQueue.shift();

        if (radiantIndex < direIndex) {
            radiantQueue.push(radiantIndex + n);
        } else {
            direQueue.push(direIndex + n);
        }
    }

    return radiantQueue.length > 0 ? 'Radiant' : 'Dire';
};
