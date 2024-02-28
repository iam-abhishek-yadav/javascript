var isIsomorphic = function(s, t) {
    const [map1, map2] = [new Map(), new Map()];
    for(let i=0;i<s.length;i++){
        let [c, b] = [s.charAt(i), t.charAt(i)];
        if(map1.has(c) && map2.has(b)){
            if(map1.get(c) !== b || map2.get(b) !== c) return false;
        } else if((map1.has(c) && !map2.has(b)) || (!map1.has(c) && map2.has(b))) return false;
        else {
            map1.set(c,b);
            map2.set(b,c);
        }
    }
    return true;
};
