// Q-5 in leetcode

var longestPalindrome = function (s) {
    let maxLength = 0
        start = 0
  
    for (let i = 0; i < s.length; i++) {
        let singleCharLength = expandAroundCenter(s, i, i)
        let doubleCharLength = expandAroundCenter(s, i, i + 1)
  
        let currentMax = Math.max(singleCharLength, doubleCharLength)
  
        if (currentMax > maxLength) {
            maxLength = currentMax
            start = i - parseInt((currentMax - 1) / 2)
        }
    }
  
    return s.slice(start, start + maxLength)
  }
  
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--
        right++
    }
  
    return right - left - 1
  }
  
  const inputString = "babad"
  const result = longestPalindrome(inputString)
  console.log(result)
  