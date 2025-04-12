/*
    ---------------------------------
    ------ Linked List Class  -------
    ---------------------------------
*/

class Node {
  constructor(data) {
    this.data = data;
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
}

let list = new LinkedList();

console.log(`List is Empty : ${list.isEmpty()}`);
console.log(`the Size of List is : ${list.getSize()}`);
