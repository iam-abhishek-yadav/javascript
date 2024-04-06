class Solution {
    fractionalKnapsack(W, arr, n) {
        arr.sort((a, b) => (b.value / b.weight) - (a.value / a.weight));
        let maxValue = 0.0;
        for (const a of arr) {
            if (a.weight <= W) {
                W -= a.weight;
                maxValue += a.value;
            } else {
                const fraction = W / a.weight;
                maxValue += fraction * a.value;
                break;
            }
        }
        return maxValue;
    }
}
