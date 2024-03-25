var accountsMerge = function(accounts) {
    let n = accounts.length;
    let p = new Array(n).fill(0).map((_, index) => index);
    const find = (x, p) => {
        if (p[x] !== x) {
            p[x] = find(p[x], p);
        }
        return p[x];
    }
    let emailId = new Map();
    for (let i = 0; i < n; ++i) {
        let account = accounts[i];
        let name = account[0];
        for (let j = 1; j < account.length; ++j) {
            let email = account[j];
            if (emailId.has(email)) {
                p[find(i, p)] = find(emailId.get(email), p);
            } else {
                emailId.set(email, i);
            }
        }
    }
    
    let mp = new Map();
    for (let i = 0; i < n; ++i) {
        let account = accounts[i];
        for (let j = 1; j < account.length; ++j) {
            let email = account[j];
            mp.set(find(i, p), (mp.get(find(i, p)) || new Set()).add(email));
        }
    }
    
    let res = [];
    for (let [key, value] of mp.entries()) {
        let t = Array.from(value);
        t.sort();
        t.unshift(accounts[key][0]);
        res.push(t);
    }
    return res;
};
