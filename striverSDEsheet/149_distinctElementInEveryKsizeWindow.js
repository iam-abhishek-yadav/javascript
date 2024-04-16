function countDistinctElements(arr, k) {
    const map = new Map();
    const result = [];

    let i = 0, j = 0;

    while (j < arr.length) {
        const window = j - i + 1;
        const elemAtJ = arr[j];
        map.set(elemAtJ, (map.get(elemAtJ) || 0) + 1);

        if (window === k) {
            result.push(map.size());
            const elemAtI = arr[i];
            map.set(elemAtI, map.get(elemAtI) - 1);
            if (map.get(elemAtI) === 0) {
                map.delete(elemAtI);
            }
            i++;
        }
        
        j++;
    }

    return result;
}

