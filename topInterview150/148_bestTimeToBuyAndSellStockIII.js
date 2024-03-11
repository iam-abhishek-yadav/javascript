var maxProfit = function(prices) {
    let [buy1, sell1, buy2, sell2] = [-prices[0], 0, -prices[0], 0];

    for (let i = 1; i < prices.length; ++i) {
        buy1 = Math.max(buy1, -prices[i]);
        sell1 = Math.max(sell1, buy1 + prices[i]);
        buy2 = Math.max(buy2, sell1 - prices[i]);
        sell2 = Math.max(sell2, buy2 + prices[i]);
    }

    return sell2;
};
