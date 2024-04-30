function superiorElements(a) {
    let max = a[a.length - 1];
    let list = [max];
    
    for (let i = a.length - 2; i >= 0; i--) {
        if (a[i] > max) {
            max = a[i];
            list.push(max);
        }
    }
    
    return list;
}

