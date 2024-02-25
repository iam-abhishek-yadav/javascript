var maxProfit = function(prices, fee) {
    let [profitWithoutStock, profitWithStock] = [0, -prices[0]];

    for (const currentPrice of prices.slice(1)) {
        [profitWithoutStock, profitWithStock] = [
            Math.max(profitWithoutStock, profitWithStock + currentPrice - fee),
            Math.max(profitWithStock, profitWithoutStock - currentPrice)
        ];
    }

    return profitWithoutStock;
};
