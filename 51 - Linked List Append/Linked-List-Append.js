/*
    -----------------------------------------
    ------ Linked List Class Append --------
    -----------------------------------------

    The append operation adds a new node to the end of the linked list.
    Unlike prepend (which adds to the beginning), append requires traversing 
    the entire list to find the last node before adding the new node.

    Time Complexity: O(n) - where n is the number of nodes in the list
    Space Complexity: O(1) - only creates one new node regardless of list size
*/

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

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; // Important Note #
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
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
        listValues += `${current.value} `;
        current = current.next;
      }
      return listValues.trim();
    }
  }
}

let nodeOne = new LinkedList();

// nodeOne.prepend(10);
// nodeOne.prepend(20);
// nodeOne.prepend(30);

console.log(`Are this Linked List is Empty ? ${nodeOne.isEmpty()}`);
console.log(`The size of the LinkedList is : ${nodeOne.getSize()}`);

nodeOne.append(50);
nodeOne.append(60);
nodeOne.append(80);

console.log(nodeOne.print());
