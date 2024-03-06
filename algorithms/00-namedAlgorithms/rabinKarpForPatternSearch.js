class Solution {

    search(pattern, txt)
    {
        const [res, n, m, d, q] = [[], txt.length, pattern.length, 256, 101];
        let [h, txtHash, patHash, i, j] = [1, 0, 0, 0, 0];
        for(let i=0;i<m-1;i++) h = (h*d) % q;
        for(let i=0;i<m;i++){
            patHash = (d * patHash + pattern[i].charCodeAt()) % q;
            txtHash = (d * txtHash + txt[i].charCodeAt()) % q;
        }

        for(i=0;i<=n-m;i++){
            if(patHash === txtHash) {
                for(j=0;j<m;j++){
                    if(pattern[j] !== txt[i+j]) break;
                }
                if(j === m){
                    res.push(i);
                }
            }
            if(i < n-m){
                txtHash = (d * (txtHash - txt[i].charCodeAt() * h) + txt[i+m].charCodeAt()) % q;
                if(txtHash < 0) txtHash = txtHash + q;
            }
        }
        return res;
    }
}

const solution = new Solution();
const text = "ababcababcabc";
const pattern = "abc";

const output = solution.search(pattern, text);

if (output.length > 0) {
    console.log(`Pattern "${pattern}" found at indices: ${output.join(", ")}`);
} else {
    console.log(`Pattern "${pattern}" not found in the text`);
}

