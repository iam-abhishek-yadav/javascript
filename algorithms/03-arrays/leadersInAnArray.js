function superiorElements(a) {
    const list = [a[a.length - 1]];
  
    for (let i = a.length - 2; i >= 0; i--) {
        if (a[i] > list[list.length - 1]) {
            list.push(a[i]);
        }
    }
  
    return list;
  }
  
  
  const inputArray = [5, 2, 7, 1, 8, 4];
  const result = superiorElements(inputArray);
  
  console.log("Input Array:", inputArray);
  console.log("Superior Elements:", result);
  