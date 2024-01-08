// Q-242 in leetcode
var isAnagram = function(s, t) {
    return s.toLowerCase().split('').sort().join('') === t.toLowerCase().split('').sort().join('');
  };
  
  const example1_s = "Listen";
  const example1_t = "Silent";
  const example1_result = isAnagram(example1_s, example1_t);
  console.log(`Example 1: ${example1_result}`); 
  
  const example2_s = "hello";
  const example2_t = "world";
  const example2_result = isAnagram(example2_s, example2_t);
  console.log(`Example 2: ${example2_result}`); 
  