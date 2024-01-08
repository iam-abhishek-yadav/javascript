// Q-1021 in leetcode

function removeOuterParentheses(s) {
    let result = '';
    let stack = [];
  
    for (const c of s) {
        if (c === '(') {
            if (stack.length > 0) {
                result += c;
            }
            stack.push(c);
        } else {
            stack.pop();
            if (stack.length > 0) {
                result += c;
            }
        }
    }
  
    return result;
  }
  
  let inputString = "(()())(())";
  let result = removeOuterParentheses(inputString);
  console.log(result);