var fullJustify = function(words, maxWidth) {
    const ans = [];
    for(let i=0, n= words.length;i<n;){
        const t = [words[i]];
        let cnt = words[i++].length;
        while(i < n && cnt+1+words[i].length <= maxWidth){
            t.push(words[i]);
            cnt += 1 + words[i++].length;
        }
        if(i === n || t.length === 1){
            const left = t.join(' ');
            const right = ' '.repeat(maxWidth-left.length);
            ans.push(left+right);
            continue;
        }
        const spaceWidth = maxWidth - (cnt - t.length + 1);
        const w = Math.floor(spaceWidth / (t.length-1));
        const m = spaceWidth % (t.length-1);
        const row = [];
        for(let j=0;j<t.length-1;j++){
            row.push(t[j]);
            row.push(' '.repeat(w+(j < m ? 1 : 0)));
        }
        row.push(t[t.length-1]);
        ans.push(row.join(''));
    }
    return ans;
};
