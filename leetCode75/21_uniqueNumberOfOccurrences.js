var uniqueOccurrences = function(arr) {
    const map = new Map();
    for (const num of arr) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    const set = new Set();
    for (const count of map.values()) {
        if (set.has(count)) {
            return false;
        }
        set.add(count);
    }

    return true;
};
