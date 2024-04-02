class Solution {
    maxLen(arr,n){
        let [max, sum] = [0, 0];
        const map = new Map();
        map.set(0, -1);
        for(let i=0;i<n;i++){
            sum += arr[i];
            if(sum == 0) max = i+1;
            if(map.has(sum)){
                max = Math.max(max, i - map.get(sum));
                
            }
            if(!map.has(sum)) map.set(sum, i);
        }
        return max;
    }
}
