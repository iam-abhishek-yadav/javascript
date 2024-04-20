class Solution {

    AllPossibleStrings(s){
        const ans = [];
        
        let output = "";
        let i = 0;
        this.solve(s, ans, output, i);
        
        ans.sort();
        ans.splice(ans.indexOf(""), 1);
        
        return ans;
    }
    solve (s, ans, output, i) {
        if (i >= s.length) {
            ans.push(output);
            return;
        }
        
        this.solve(s, ans, output, i + 1);
        output += s[i];
        this.solve(s, ans, output, i + 1);
    }
}
