class Solution {
    findPlatform(arr, dep, n){
        arr.sort((a, b) => a - b);
        dep.sort((a, b) => a - b);
        let [i, j, res, curr] = [1, 0, 1, 1];
        while(i < n && j < n){
            if(arr[i] <= dep[j]){
                curr++;
                i++;
            } else {
                curr--;
                j++;
            }
            res = Math.max(curr, res);
        }
        return res;
    }
}
