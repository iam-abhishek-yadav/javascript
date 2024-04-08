class Solution {
    static findMedian(matrix, m, n) {
        let low = Number.MAX_SAFE_INTEGER;
        let high = Number.MIN_SAFE_INTEGER;

        for (let i = 0; i < m; i++) {
            low = Math.min(low, matrix[i][0]);
            high = Math.max(high, matrix[i][n - 1]);
        }

        const req = Math.floor((n * m) / 2);

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            const currNumbers = this.numElements(matrix, mid);

            if (currNumbers <= req)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return low;
    }

    static numElements(arr, num) {
        let count = 0;

        for (let i = 0; i < arr.length; i++)
            count += this.upperBound(arr[i], num);

        return count;
    }

    static upperBound(arr, num) {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);

            if (arr[mid] <= num)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return low;
    }
}

