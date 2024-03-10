var wordBreak = function(s, wordDict) {
    const n = s.length;
    const dp = Array(n+1).fill(false);
    dp[0] = true;
    for(let i=1;i<=n;i++){
        for(let word of wordDict){
            if(dp[i-word.length] && s.startsWith(word, i-word.length)) dp[i] = true;
        }
    }
    return dp[n];
};
