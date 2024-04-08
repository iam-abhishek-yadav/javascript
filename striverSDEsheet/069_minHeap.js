class Solution {
    minHeap(n, q) {
        let cnt = 0;
        for (let i = 0; i < q.length; i++) {
            if (q[i][0] === 1)
                cnt++;
        }
        const res = new Array(cnt);
        let i = 0;
        const pq = [];
        for (let a of q) {
            if (a[0] === 0) {
                pq.push(a[1]);
                this.heapify(pq);
            }
            if (a[0] === 1) {
                res[i] = pq[0];
                pq.shift();
                this.heapify(pq);
                i++;
            }
        }
        return res;
    }

    heapify(arr) {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            this.heapifyUtil(arr, i);
        }
    }

    heapifyUtil(arr, i) {
        const n = arr.length;
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < n && arr[left] < arr[largest])
            largest = left;

        if (right < n && arr[right] < arr[largest])
            largest = right;

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            this.heapifyUtil(arr, largest);
        }
    }
}

