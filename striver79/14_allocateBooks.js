function findPages(arr, n, m) {
    if (m > n) return -1;
    let low = 0, high = 0;

    for (let num of arr) {
        low = Math.max(low, num);
        high += num;
    }

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);
        let number = count(arr, mid);

        if (number > m) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}

function count(list, mid) {
    let student = 1, curr = 0;

    for (let num of list) {
        if (curr + num <= mid) {
            curr += num;
        } else {
            curr = num;
            student++;
        }
    }

    return student;
}

