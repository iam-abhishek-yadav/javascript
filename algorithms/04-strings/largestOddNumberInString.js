// Q-1903 in leetcode

var largestOddNumber = function(num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if ((parseInt(num.charAt(i)) & 1) === 1) {
            return num.substring(0, i + 1);
        }
    }
    return "";
  };
  
  let exampleNum = "2132142";
  let result = largestOddNumber(exampleNum);
  console.log(result);
  