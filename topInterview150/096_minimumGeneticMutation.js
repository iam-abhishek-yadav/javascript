var minMutation = function(startGene, endGene, geneBank) {
    const mutationQueue = [startGene];
    let mutationCount = 0;
    while (mutationQueue.length) {
        const queueSize = mutationQueue.length;
        for (let i = 0; i < queueSize; i++) {
            const currentGene = mutationQueue.shift();
            if (currentGene === endGene) {
                return mutationCount;
            }
            for (let j = geneBank.length - 1; j >= 0; j--) {
                const potentialMutation = geneBank[j];
                let mutationDifference = 0;
                for (let k = 0; k < 8; k++) {
                    if (currentGene[k] !== potentialMutation[k]) {
                        mutationDifference++;
                    }
                }
                if (mutationDifference <= 1) {
                    mutationQueue.push(...geneBank.splice(j, 1));
                }
            }
        }
        mutationCount++;
    }
    return -1;
};

