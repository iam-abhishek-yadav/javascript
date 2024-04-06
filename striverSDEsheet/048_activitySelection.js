function maximumActivities(start, end) {
    const arr = [];
    for (let i = 0; i < start.length; i++) {
        arr.push({ start: start[i], end: end[i] });
    }

    arr.sort((a, b) => a.end - b.end);
    let count = 1;
    let prev = arr[0].end;
    for (let i = 1; i < start.length; i++) {
        if (prev <= arr[i].start) {
            count++;
            prev = arr[i].end;
        }
    }

    return count;
}

