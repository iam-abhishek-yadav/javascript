var join = function(arr1, arr2) {
    const map = new Map();
    arr1.forEach(x => map.set(x.id, x));
    arr2.forEach(x => map.set(x.id, {...map.get(x.id), ...x}));
    return [...map.values()].sort((a,b) => a.id - b.id);
};
