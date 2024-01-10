function countSubStrings(str, k) {
    const n = str.length;
    let res = 0;
  
    for (let i = 0; i < n; i++) {
        let disCount = 0;
        const cnt = Array(26).fill(0);
  
        for (let j = i; j < n; j++) {
            if (cnt[str.charCodeAt(j) - 'a'.charCodeAt(0)] === 0) {
                disCount++;
                cnt[str.charCodeAt(j) - 'a'.charCodeAt(0)]++;
            }
  
            if (disCount === k) {
                res++;
            }
  
            if (disCount > k) {
                break;
            }
        }
    }
  
    return res;
  }
  
  const inputString = "urrrzaxxxhjjquooxzgwzpppavcfaxeefnggtsii";
  const kValue = 5;
  const result = countSubStrings(inputString, kValue);
  console.log(`Count of substrings with ${kValue} distinct characters: ${result}`);
  