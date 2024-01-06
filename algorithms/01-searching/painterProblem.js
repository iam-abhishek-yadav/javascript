function findLargestMinDistance(boards, k) {
    let low = Math.max(...boards);
    let high = boards.reduce((total, board) => total + board, 0);
  
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const painters = countPainters(boards, mid);
  
        if (painters > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
  }
  
  function countPainters(boards, time) {
    const n = boards.length;
    let painters = 1;
    let boardsPainter = 0;
  
    for (let i = 0; i < n; i++) {
        if (boardsPainter + boards[i] <= time) {
            boardsPainter += boards[i];
        } else {
            painters++;
            boardsPainter = boards[i];
        }
    }
    return painters;
  }
  
  const boards = [4, 8, 6, 12, 10];
  const k = 2;
  const result = findLargestMinDistance(boards, k);
  