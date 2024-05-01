class Solution {
    static getFloorAndCeil(a, n, x) {
        return [lb(n, x, a), ub(n, x, a)];
    }

    static lb(n, x, a) {
        let l = 0, e = n - 1, ans = -1;
        while (l <= e) {
            let mid = Math.floor((l + e) / 2);
            if (a[mid] <= x) {
                ans = a[mid];
                l = mid + 1;
            } else {
                e = mid - 1;
            }
        }
        return ans;
    }

    static ub(n, x, a) {
        let l = 0, e = n - 1, ans = -1;
        while (l <= e) {
            let mid = Math.floor((l + e) / 2);
            if (a[mid] >= x) {
                ans = a[mid];
                e = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return ans;
    }
}

