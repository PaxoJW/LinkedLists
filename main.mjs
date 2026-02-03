import {LinkedList} from "./linkedList.mjs"

// example uses class syntax - adjust as necessary
const list = LinkedList();

console.log("list just initialized: ", list.list);

list.append("dog");
list.append("cat");
list.append("parrot");
list.prepend("hamster");
list.append("snake");

const size = list.size();

console.log("After appending", list.list.nextNode);
console.log("Length: ", size);



//Test it out
console.log(list.toString());