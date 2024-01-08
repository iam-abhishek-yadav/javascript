// Q-796 in leetcode

var rotateString = function(s, goal) {
    if (s.length !== goal.length) return false;
    goal += goal;
    return goal.indexOf(s) !== -1;
  };
  
  const s = "abcde";
  const goal = "cdeab";
  const result = rotateString(s, goal);
  console.log(result);
  