// Q-1781 in leetcode

function sumOfBeauty(s) {
    let totalBeauty = 0;
  
    for (let i = 0; i < s.length; i++) {
        const charCount = new Array(26).fill(0);
  
        for (let j = i; j < s.length; j++) {
            const charIndex = s.charCodeAt(j) - 'a'.charCodeAt(0);
            charCount[charIndex]++;
  
            let maxFreq = 0, minFreq = Infinity;
  
            for (let k = 0; k < 26; k++) {
                if (charCount[k] > 0) {
                    maxFreq = Math.max(maxFreq, charCount[k]);
                    minFreq = Math.min(minFreq, charCount[k]);
                }
            }
  
            totalBeauty += maxFreq - minFreq;
        }
    }
  
    return totalBeauty;
  }
  
  const inputString = "aabcb";
  const result = sumOfBeauty(inputString);
  console.log(result);
  