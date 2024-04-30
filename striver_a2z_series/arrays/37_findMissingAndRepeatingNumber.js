function findMissingRepeatingNumbers(a) {
    let n = a.length;
    let xr = 0;
    for (let i = 0; i < n; i++) {
        xr = xr ^ a[i];
        xr = xr ^ (i + 1);
    }
    let number = (xr & ~(xr - 1));
    let zero = 0, one = 0;
    for (let i = 0; i < n; i++) {
        if ((a[i] & number) !== 0) one = one ^ a[i];
        else zero = zero ^ a[i];
    }

    for (let i = 1; i <= n; i++) {
        if ((i & number) !== 0) one = one ^ i;
        else zero = zero ^ i;
    }
    let cnt = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] === zero) return [zero, one];
    }
    return [one, zero];
}

