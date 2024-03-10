var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, ans = [];
    for (let carry = 0; i >= 0 || j >= 0 || carry; --i, --j) {
        carry += (i >= 0 ? parseInt(a[i]) : 0);
        carry += (j >= 0 ? parseInt(b[j]) : 0);
        ans.push(carry % 2);
        carry >>= 1;
    }
    return ans.reverse().join('');
};
