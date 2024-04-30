module.exports = { 
    solve: function(a, k){
        const n = a.length;
        let xr = 0;
        const mpp = new Map();
        mpp.set(xr, 1);
        let cnt = 0;

        for (let i = 0; i < n; i++) {
            xr = xr ^ a[i];
            const x = xr ^ k;
            cnt += mpp.get(x) || 0;
            mpp.set(xr, (mpp.get(xr) || 0) + 1);
        }
        return cnt;
    }
};

