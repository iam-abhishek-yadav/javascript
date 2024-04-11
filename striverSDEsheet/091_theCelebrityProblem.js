class Solution {
    static findCelebrity(n) {
        let left = 0;
        let right = n - 1;

        for (let i = 0; i < n; i++) {
            if (Runner.knows(left, right)) {
                left++;
            } else {
                right--;
            }
        }

        for (let i = 0; i < n; i++) {
            if (i !== left && (Runner.knows(left, i) || !Runner.knows(i, left))) {
                return -1;
            }
        }

        return left;
    }
}

