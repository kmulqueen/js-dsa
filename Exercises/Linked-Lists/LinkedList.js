class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    const values = [];
    while (temp !== null) {
      values.push(temp.value);
      temp = temp.next;
    }
    return values;
  }

  getHead() {
    if (this.head === null) {
      return null;
    } else {
      return this.head.value;
    }
  }

  getTail() {
    if (this.tail === null) {
      return null;
    } else {
      return this.tail.value;
    }
  }

  getLength() {
    return this.length;
  }

  makeEmpty() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    return this;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Removes item from end and returns it
  pop() {
    // If list has 0 nodes
    if (!this.head) return undefined;

    // If list has only 1 node
    if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return temp.value;
    }

    // List has multiple nodes
    let temp = this.head;
    let prev = this.head;

    while (temp.next) {
      prev = temp;
      temp = temp.next;
    }

    this.tail = prev;
    this.tail.next = null;
    this.length--;
    return temp.value;
  }
}

module.exports = { LinkedList, Node };
