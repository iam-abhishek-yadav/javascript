class Solution {
    subsetSums(arr, n) {
        const list = [];
        const dfs = (index, sum) => {
            if (index === n) {
                list.push(sum);
                return;
            }
            dfs(index + 1, sum + arr[index]);
            dfs(index + 1, sum);
        };
        dfs(0, 0);
        list.sort((a, b) => a - b);
        return list;
    }
}
