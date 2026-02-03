function LinkedList() {
    let list = null;
    function append(value) {
        if (list === null) {
            list = Node(value);
        } else {
            let current = list;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = Node(value);
        }
    }

    function prepend(value) {
        const current = list;
        const preNode = Node(value);
        preNode.nextNode = current;
        list = preNode;
    }

    
    function size() {
        let size = 0;
        if (list.nextNode === null) {
            size ++;
            return size;
        }
        
        const values = Object.values(list);
    
        for (const value of values) {
            if (!Array.isArray(value)) {
                size ++;
            } else {
                const nextList = list.nextNode;
                size += nextList.size();
            }
        }
        return size;
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
            return nextList.tail();
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
                    return nextList.at(i);
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

    function contains(value) {
        if (value === list.value) {
            return true;
        } else {
            return list.nextNode.contains(value);
        }
    }

    function findIndex(v) {
        let index = 0;
        
        const values = Object.values(list);
    
        for (const value of values) {
            if (!Array.isArray(value)){
                if (v === list.value) {
                    return index;
                }
                index ++;
            } else if (value === null){
                return -1;
            } else {
                const nextList = list.nextNode;
                index += nextList.findIndex();
            }
        }

        return index;
    }

    function toString() {
        let string = "";
        
        if (list.value === null) {
            string += "null";
            return string;
        }
        string += list.value;
        return string += list.nextNode.toString();
    }

    return {list, append, prepend, size, head, tail, at, pop, contains, findIndex, toString, get list() { return list; }};
}


function Node(v) {
    const value = v;
    const nextNode = null;
    return {value, nextNode};
}

export {LinkedList};
