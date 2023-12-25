const findNumbersForTarget = (n, book, target) => {
    book.sort((a, b) => a - b);
    let left = 0;
    let right = n - 1;
  
    while (left < right) {
        const sum = book[left] + book[right];
  
        if (sum === target) {
            return [book[left], book[right]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
  
    return -1;
  };
  
  const n = 5;
  const book = [1, 4, 2, 7, 3];
  const target = 10;
  
  const result = findNumbersForTarget(n, book, target);
  console.log(result); // Output: [3, 7]
  