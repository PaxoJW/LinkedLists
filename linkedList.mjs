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
        let count = 0;
        let current = list;

        while (current !== null) {
            count++;
            current = current.nextNode;
        }

        return count;
    }


    function head() {
        if (list === null) {
            return undefined;
        } else {
            return list.value;
        }
    }

    function tail() {
        let current = list;
        let value = undefined;

        while (current !== null) {
            value = current.value;
            current = current.nextNode;
        }

        return value;
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
        let current = list;

        while (current !== null) {
            if (current.value === value) {
                return true;
            } else {
                current = current.nextNode;
            }
        }

        return false;
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
