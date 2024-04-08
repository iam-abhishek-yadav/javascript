class Solution {
    ayushGivesNinjatest(n, m, time) {
        let start = 0, totalTime = 0, ans = -1;
        for (let i of time) {
            totalTime += i;
        }
        let end = totalTime;
        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            if (this.isPossible(n, m, time, mid)) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return ans;
    }

    isPossible(n, m, arr, mid) {
        let day = 1;
        let requireTime = 0;
        for (let x of arr) {
            if (requireTime + x <= mid) {
                requireTime += x;
            } else {
                day++;
                if (day > n || x > mid) {
                    return false;
                }
                requireTime = x;
            }
        }
        return true;
    }
}

