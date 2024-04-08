class Solution {
    kthElement(arr1, arr2, n, m, k) {
        let i = 0;
        let j = 0;
        let q = 0;
        const ans = new Array(n + m);
        while (i < n && j < m) {
            if (arr1[i] < arr2[j]) {
                ans[q] = arr1[i];
                i++;
            } else {
                ans[q] = arr2[j];
                j++;
            }
            q++;
        }
        while (i < n) {
            ans[q] = arr1[i];
            i++;
            q++;
        }
        while (j < m) {
            ans[q] = arr2[j];
            j++;
            q++;
        }
        return ans[k - 1];
    }
}

