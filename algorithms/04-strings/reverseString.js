// Q-151 in leetcode

var reverseWords = function(s) {
    let wordsArray = s.split(/\s+/).filter(word => word !== '');
    let reversedWordsArray = wordsArray.reverse();
    let reversedString = reversedWordsArray.join(' ');
    return reversedString;
};
  
let inputString = "Hello World";
let reversedOutput = reverseWords(inputString);
console.log(reversedOutput);
  