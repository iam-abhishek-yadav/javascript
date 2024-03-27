class Solution {
    static cutRod(price, n) {
        const cost = new Array(n + 1).fill(0);
        for (let i = 1; i <= n; i++) {
            let maxCost = Number.MIN_VALUE;
            for (let j = 0; j < i; j++) {
                maxCost = Math.max(maxCost, price[j] + cost[i - j - 1]);
            }
            cost[i] = maxCost;
        }
        return cost[n];
    }
}
