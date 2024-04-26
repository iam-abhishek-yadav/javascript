class Codec {
    encode(strs) {
        let ans = '';
        for (let s of strs) {
            ans += String.fromCharCode(s.length) + s;
        }
        return ans;
    }

    decode(s) {
        let ans = [], i = 0, n = s.length;
        while (i < n) {
            let size = s.charCodeAt(i++);
            ans.push(s.substring(i, i + size));
            i += size;
        }
        return ans;
    }
}
