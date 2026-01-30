function LinkedList() {
    let list = [];
    function append(value) {
        if (list.nextNode === null) {
            list.nextNode = Node(value);
        }
        else list.nextNode.append(value);
        //do we have to return in this case as well? 
    }

    function prepend(value) {
        const preNode = Node(value);
        preNode.nextNode(list);
    }

    return append, prepend;
}
function Node(v) {
    const value = v;
    const nextNode = null;
    return [value, nextNode];
}