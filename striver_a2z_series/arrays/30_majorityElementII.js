var majorityElement = function(nums) {
    let [ele1, ele2, cnt1, cnt2] = [Infinity, Infinity, 0, 0];
    for(const num of nums){
        if(cnt1 === 0 && num !== ele2){
            ele1 = num;
            cnt1++;
        } else if(cnt2 === 0 && num !== ele1){
            ele2 = num;
            cnt2++;
        } else if(num === ele1) cnt1++;
        else if(num === ele2) cnt2++;
        else{
            cnt1--;
            cnt2--;
        }
    }
    cnt1 = 0; cnt2 = 0;
    for(const num of nums){
        if(num === ele1) cnt1++;
        if(num === ele2) cnt2++;
    }
    const res = [];
    if(cnt1 > nums.length/3) res.push(ele1);
    if(cnt2 > nums.length/3) res.push(ele2);
    return res;
};
