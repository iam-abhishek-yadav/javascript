function linearSearch(n, num, arr) {
    for (let i = 0; i < n; i++) {
        if (arr[i] === num) return i;
    }
    return -1;
}

