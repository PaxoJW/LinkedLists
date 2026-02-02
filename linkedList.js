function LinkedList() {
    let list = [];
    function append(value) {
        if (list.length === 0) {
            list = Node(value);
        }
        else if (list.nextNode === null) {
            list.nextNode = Node(value);
        }
        else list.nextNode.append(value);
        //do we have to return in this case as well? 
    }

    function prepend(value) {
        const preNode = Node(value);
        preNode.nextNode(list);
    }

    let size = 0;
    function size() {
        if (list.nextNode === null) {
            size += 1;
            return size;
        }
        else {
            size += 1;
            const nextList = list.nextNode;
            return nextList.size();
        }
    }

    function head() {
        if (list.length === 0) {
            return undefined;
        } else {
            return value;
        }
    }

    function tail() {
        if (list.length === 0) {
            return undefined;
        } else if (list.nextNode === null) {
            return value;
        } else {
            const nextList= list.nextNode;
            nextList.tail();
        }
    }

    function at(index) {
        if (index > list.length - 1) {
            return undefined;
        } else {
            for (let i = 0; i < index; i ++){
                if (i === index) {
                    return value;
                } else {
                    const nextList = list.nextNode;
                    nextList.at(i);
                }
            }
        }
    }

    function pop() {
        if (list.length === 0) {
            return undefined;
        } else {
            const value = list.value;
            list = list.nextNode;
            return value;
        }
    }



    return append, prepend, size, head, tail, at, pop, contains, findIndex, toString;
}

function Node(v) {
    const value = v;
    const nextNode = null;
    return [value, nextNode];
}