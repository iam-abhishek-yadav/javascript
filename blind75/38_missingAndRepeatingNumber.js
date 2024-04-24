module.exports = {
    repeatedNumber: function(A) {
        let xor = 0;
        for (let i = 0; i < A.length; i++) {
            xor ^= (i + 1);
            xor ^= A[i];
        }

        let firstSetBit = xor & (~(xor - 1));
        let xorSet = 0, xorNotSet = 0;

        for (let i = 0; i < A.length; i++) {
            let num = A[i];
            if ((num & firstSetBit) === firstSetBit) {
                xorSet ^= num;
            } else {
                xorNotSet ^= num;
            }

            if (((i + 1) & firstSetBit) === firstSetBit) {
                xorSet ^= (i + 1);
            } else {
                xorNotSet ^= (i + 1);
            }
        }

        for (let i = 0; i < A.length; i++) {
            if (xorSet === A[i]) {
                return [xorSet, xorNotSet];
            }
        }

        return [xorNotSet, xorSet];
    }
};

