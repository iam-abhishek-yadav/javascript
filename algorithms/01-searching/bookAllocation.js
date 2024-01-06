function findPages(arr, n, m) {
    if (m > n) return -1;
    let low = 0, high = 0;
  
    arr.forEach((num) => {
        low = Math.max(low, num);
        high += num;
    });
  
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        const number = count(arr, mid);
  
        if (number > m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
  
    return low;
  }
  
  function count(list, mid) {
    let student = 1;
    let curr = 0;
  
    for (const num of list) {
        if (curr + num <= mid) {
            curr += num;
        } else {
            curr = num;
            student++;
        }
    }
  
    return student;
  }
  
  const arr = [12, 34, 67, 90];
  const n = arr.length;
  const m = 2;
  const result = findPages(arr, n, m);
  console.log(result);
  