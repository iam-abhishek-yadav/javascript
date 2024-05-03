var rotateString = function(s, goal) {
    if(s.length !== goal.length) return false
    goal += goal
    return goal.indexOf(s) !== -1
};
