var successfulPairs = function(spells, potions, success) {
    potions.sort((a, b) => a - b);

    const n = spells.length;
    const pairs = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        pairs[i] = binarySearchCount(potions, Math.ceil(success / spells[i]));
    }

    return pairs;
};

var binarySearchCount = (arr, target) => {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr.length - low;
}
