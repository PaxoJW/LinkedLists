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

console.log("After appending", list.list);
console.log("Length: ", size);


console.log("Head:", list.head());
console.log("Tail:", list.tail());

console.log("What's popping?",list.pop());
console.log("What's popping?",list.pop());

console.log("Includes:", list.contains("cat"));
console.log("Includes:", list.contains("dog"));



//Test it out
console.log(list.toString());