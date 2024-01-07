function kthElement(arr1, arr2, n, m, k) {
    if (n > m) {
        return kthElement(arr2, arr1, m, n, k);
    }
  
    if (n === 0) {
        return arr2[k - 1];
    }
  
    let low = Math.max(0, k - m);
    let high = Math.min(k, n);
  
    while (low <= high) {
        let cut1 = (low + high) >> 1;
        let cut2 = k - cut1;
        let l1 = cut1 === 0 ? Number.MIN_SAFE_INTEGER : arr1[cut1 - 1];
        let l2 = cut2 === 0 ? Number.MIN_SAFE_INTEGER : arr2[cut2 - 1];
        let r1 = cut1 === n ? Number.MAX_SAFE_INTEGER : arr1[cut1];
        let r2 = cut2 === m ? Number.MAX_SAFE_INTEGER : arr2[cut2];
  
        if (l1 <= r2 && l2 <= r1) {
            return Math.max(l1, l2);
        } else if (l1 > r2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    return -1;
  }
  
  const arr1 = [2, 3, 4, 7, 9];
  const arr2 = [1, 5, 8, 10];
  const n = arr1.length;
  const m = arr2.length;
  const k = 5;
  
  const result = kthElement(arr1, arr2, n, m, k);
  console.log(`The ${k}th element is: ${result}`);
  