var maxProfit = function(prices) {
    let [min, max] = [prices[0], 0];
    for(let i=1;i<prices.length;i++){
        max = Math.max(max, prices[i] - min);
        min = Math.min(min, prices[i]);
    }
    return max;
};
