function sortedArray(a, b) {
    let list = [];
    let left = 0, right = 0;
    
    while (left < a.length && right < b.length) {
        if (a[left] <= b[right]) {
            if (list.length === 0 || list[list.length - 1] !== a[left]) list.push(a[left]);
            left++;
        } else {
            if (list.length === 0 || list[list.length - 1] !== b[right]) list.push(b[right]);
            right++;
        }
    }
    
    while (left < a.length) {
        if (list[list.length - 1] !== a[left]) list.push(a[left]);
        left++;
    }
    
    while (right < b.length) {
        if (list[list.length - 1] !== b[right]) list.push(b[right]);
        right++;
    }
    
    return list;
}

