class Solution {
    static sortStack(st) {
        if (st.length <= 1) return;
        let top = st.pop();
        Solution.sortStack(st);
        Solution.insertAtCorrectPosition(st, top);
    }

    static insertAtCorrectPosition(st, x) {
        if (st.length === 0 || st[st.length - 1] <= x) {
            st.push(x);
            return;
        }
        let top = st.pop();
        Solution.insertAtCorrectPosition(st, x);
        st.push(top);
    }
}

