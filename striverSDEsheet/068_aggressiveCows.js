class Solution {
    aggressiveCows(stalls, k) {
        stalls.sort((a, b) => a - b);
        let low = 0, high = stalls[stalls.length - 1] - stalls[0];
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (this.place(stalls, k, mid)) 
                low = mid + 1;
            else 
                high = mid - 1;
        } 
        return high;
    }

    place(arr, cows, currDiff) {
        let cow = 1, curr = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] - curr >= currDiff) {
                cow++;
                curr = arr[i];
            }
        }
        return cows <= cow;
    }
}

