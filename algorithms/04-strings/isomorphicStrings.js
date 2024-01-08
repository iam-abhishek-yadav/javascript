// Q-205 in leetcode

class Solution {
    isIsomorphic(s, t) {
        let map1 = new Map();
        let map2 = new Map();
  
        for (let i = 0; i < s.length; i++) {
            let c = s.charAt(i);
            let b = t.charAt(i);
  
            if (map1.has(c) && map2.has(b)) {
                if (map1.get(c) !== b || map2.get(b) !== c) {
                    return false;
                }
            } else if ((map1.has(c) && !map2.has(b)) || (map2.has(b) && !map1.has(c))) {
                return false;
            } else {
                map1.set(c, b);
                map2.set(b, c);
            }
        }
  
        return true;
    }
  }
  
  const solution = new Solution();
  const s = "egg";
  const t = "add";
  const result = solution.isIsomorphic(s, t);
  console.log(result);
  