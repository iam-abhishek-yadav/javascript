function minimumCoins(n) {
    const coinsList = [];
    const coinValues = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
    let index = coinValues.length - 1;

    while (n !== 0 && index >= 0) {
        if (n >= coinValues[index]) {
            coinsList.push(coinValues[index]);
            n -= coinValues[index];
        } else {
            index--;
        }
    }

    coinsList.sort((a, b) => b - a);
    return coinsList;
}

