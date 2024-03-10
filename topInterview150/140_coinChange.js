var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;
    for(const coin of coins){
        for(let i=coin;i<=amount;i++){
            dp[i] = Math.min(dp[i], dp[i-coin] + 1);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};
