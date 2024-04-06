class Solution {
    JobScheduling(arr, n){
        arr.sort((a, b) => b.profit - a.profit);
        let [max, done, mark] = [0, 0, new Array(n).fill(false)];
        for(let i=0;i<n;i++){
            let deadline = arr[i].dead - 1;
            while(mark[deadline]) deadline--;
            if(deadline >= 0){
                mark[deadline] = true;
                done++;
                max += arr[i].profit;
            }
        }
        return [done, max];
    }
}
