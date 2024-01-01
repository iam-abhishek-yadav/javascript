function getFloorAndCeil(a, n, x) {
    return [lb(n, x, a), ub(n, x, a)];
  }
  
  function lb(n, x, a) {
    let l = 0,
        e = n - 1,
        ans = -1;
    while (l <= e) {
        let mid = Math.floor((l + e) / 2);
        if (a[mid] <= x) {
            ans = a[mid];
            l = mid + 1;
        } else {
            e = mid - 1;
        }
    }
    return ans;
  }
  
  function ub(n, x, a) {
    let l = 0,
        e = n - 1,
        ans = -1;
    while (l <= e) {
        let mid = Math.floor((l + e) / 2);
        if (a[mid] >= x) {
            ans = a[mid];
            e = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return ans;
  }
  
  let array = [1, 2, 8, 10, 10, 12, 19];
  let n = array.length;
  let x = 5;
  
  let result = getFloorAndCeil(array, n, x);
  console.log("Floor:", result[0], "Ceil:", result[1]);
  