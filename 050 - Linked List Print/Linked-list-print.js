/*
    -----------------------------------------
    ------ Linked List Class Operations -----
    -----------------------------------------
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  pushMethod(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; // Important Note #
      this.head = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      return 'The list is Empty !!!';
    } else {
      let current = this.head;
      let listValues = '';
      while (current) {
        listValues += `${current.value} ->`;
        current = current.next;
      }
      return listValues;
    }
  }
}

let nodeOne = new LinkedList();

nodeOne.pushMethod(10);
// console.log(nodeOne.print());
nodeOne.pushMethod(20);
nodeOne.pushMethod(30);

console.log(nodeOne.print());

console.log(`Are this Linked List is Empty ? ${nodeOne.isEmpty()}`);
console.log(`The size of the LinkedList is : ${nodeOne.getSize()}`);
