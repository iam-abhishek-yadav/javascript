function findMissingRepeatingNumbers(a) {
  const n = a.length;
  let xr = 0;
  for (let i = 0; i < n; i++) {
      xr ^= a[i];
      xr ^= (i + 1);
  }
  const number = (xr & ~(xr - 1));
  let zero = 0, one = 0;
  for (let i = 0; i < n; i++) {
      if ((a[i] & number) !== 0) one ^= a[i];
      else zero ^= a[i];
  }

  for (let i = 1; i <= n; i++) {
      if ((i & number) !== 0) one ^= i;
      else zero ^= i;
  }
  let cnt = 0;
  for (let i = 0; i < n; i++) {
      if (a[i] === zero) return [zero, one];
  }
  return [one, zero];
}
