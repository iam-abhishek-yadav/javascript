// Q-14 in leetcode

class Solution {
    longestCommonPrefix(strs) {
        if (strs == null || strs.length === 0) return "";
  
        for (let i = 0; i < strs[0].length; i++) {
            let c = strs[0].charAt(i);
  
            for (let j = 1; j < strs.length; j++) {
                if (i === strs[j].length || strs[j].charAt(i) !== c)
                    return strs[0].substring(0, i);
            }
        }
  
        return strs[0];
    }
  }
  
  const solution = new Solution();
  const exampleStrs = ["flower", "flow", "flight"];
  const result = solution.longestCommonPrefix(exampleStrs);
  console.log(result);
  