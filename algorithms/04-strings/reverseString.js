// Q-151 in leetcode

function reverseWords(str) {
    if (!str || str.length === 0) {
        return str;
    }
  
    const words = str.trim().split(/\s+/);
    const reversed = [];
  
    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }
  
    return reversed.join(' ');
  }
  
const input = "Hello World JavaScript";
const result = reverseWords(input);
console.log(result);
  