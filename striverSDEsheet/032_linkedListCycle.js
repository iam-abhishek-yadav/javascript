var hasCycle = function(head) {
    let [hare, tortoise] = [head, head];

    while (hare && hare.next) {
        hare = hare.next.next;
        tortoise = tortoise.next;

        if (hare === tortoise) {
            return true;
        }
    }

    return false;
};
