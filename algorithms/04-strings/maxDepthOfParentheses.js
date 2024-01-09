// Q-1614 in leetcode

var maxDepth = function(s) {
    let [length, max] = [0, 0]
    for(let i=0;i<s.length;i++){
        let c = s[i]
        if(c == '(') length++
        if(c == ')') length--
        max = Math.max(max, length)
    }
    return max    
  };
  
  var result = maxDepth("(1+(2*3)+((8)/4))+1");
  console.log(result);
  