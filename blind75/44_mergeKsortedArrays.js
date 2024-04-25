class Solution {
    mergeKSortedArrays(kArrays, k) {
        let result = [];
        let pq = new PriorityQueue();

        for (let array of kArrays) {
            for (let i of array) {
                pq.add(i);
            }
        }

        while (!pq.isEmpty()) {
            result.push(pq.peek());
            pq.remove();
        }

        return result;
    }
}
