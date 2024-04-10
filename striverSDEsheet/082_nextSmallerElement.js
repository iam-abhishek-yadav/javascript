class Solution {
    static immediateSmaller(a) {
        const n = a.length;
        for (let i = 0; i < n - 1; i++) {
            if (a[i] > a[i + 1]) {
                a[i] = a[i + 1];
            } else {
                a[i] = -1;
            }
        }
        a[n - 1] = -1;
    }
}

