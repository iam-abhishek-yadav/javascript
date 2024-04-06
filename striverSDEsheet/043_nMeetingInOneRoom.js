class Solution {
    maxMeetings(start, end, n){
        const meetings = [];
        for(let i=0;i<n;i++){
            meetings[i] = ({start: start[i], end: end[i]});
        }
        meetings.sort((a, b) => a.end - b.end);
        let [count, prev] = [0, -1];
        for(const {start, end} of meetings){
            if(start > prev){
                count++;
                prev = end;
            }
        }
        return count;
    }
}
