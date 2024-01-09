// Q-451 in leetcode

var frequencySort = function(s) {
    const map = new Map();
  
    for (const c of s) {
        map.set(c, (map.get(c) || 0) + 1);
    }
  
    const sortedEntries = [...map.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => k.repeat(v)).join('');
  
    return sortedEntries;
  };
  
  const inputString = "tree";
  const result = frequencySort(inputString);
  console.log(result);
  