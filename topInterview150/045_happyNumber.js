var isHappy = function(n) {
    const set = new Set();
    while (n > 0) {
        if (set.has(n)) return false;
        let [num, sum] = [n, 0];
        while (num > 0) {
            const digit = num % 10;
            num = Math.floor(num / 10);
            sum += digit * digit;
        }
        if (sum === 1) return true;
        set.add(n);
        n = sum;
    }
    return false;
};

