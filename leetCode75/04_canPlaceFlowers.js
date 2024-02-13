var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        let x = (i === 0) ? 0 : flowerbed[i - 1];
        let y = (i === flowerbed.length - 1) ? 0 : flowerbed[i + 1];

        if (x + flowerbed[i] + y === 0) {
            i++;
            n--;
        }
    }
    return n <= 0;
};
