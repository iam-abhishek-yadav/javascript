var canVisitAllRooms = function(rooms) {
    const visited = new Set();
    const dfs = (room) => {
        if(visited.has(room)) return;
        visited.add(room);
        for(const key of rooms[room]){
            dfs(key);
        }
    }
    dfs(0);
    return visited.size === rooms.length;
};
