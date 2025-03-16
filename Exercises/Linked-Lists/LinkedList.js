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

  /**
   * Inserts a new node at the end of the linked list.
   * @param {*} value - The value to be stored in the new node.
   * @this {LinkedList}
   * @returns {LinkedList} The current LinkedList instance.
   */
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

  /**
   * Removes a node at the end of the linked list.
   * @this {LinkedList}
   * @returns {*} The value property from the removed node, or undefined if the list is empty.
   */
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

  /**
   * Inserts a new node at the beginning of the linked list.
   * @param {*} value - The value to be stored in the new node.
   * @this {LinkedList}
   * @returns {LinkedList} The current LinkedList instance.
   */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /**
   * Removes a node at the beginning of the linked list.
   * @this {LinkedList}
   * @returns {*} The value property from the removed node, or undefined if the list is empty.
   */
  shift() {
    if (this.length === 0) return undefined;
    let prev = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    prev.next = null;
    return prev;
  }

  /**
   * Gets a node at a specific index.
   * @param {number} idx The index at which the node should be retrieved.
   * @returns {Node} The node at the specified index.
   */
  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < idx; i++) {
      temp = temp.next;
    }
    return temp;
  }

  /**
   * Updates the value of a node at a specific index.
   * @param {number} idx The index at which the node value will be updated.
   * @param {*} val The new value to be stored in the node.
   * @returns {Node} The node at the specified index with the updated value.
   */
  set(idx, val) {
    if (idx < 0 || idx >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < idx; i++) {
      temp = temp.next;
    }
    temp.value = val;
    return temp;
  }

  /**
   * Inserts a new node with the specified value at the specified index.
   * @param {number} idx The index at which the node value will be inserted.
   * @param {*} val The value to be stored in the node.
   * @returns {LinkedList} The current LinkedList instance.
   */
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    const newNode = new Node(val);
    let prev = this.head;
    let temp = this.head;

    for (let i = 0; i < idx; i++) {
      if (temp.next) {
        prev = temp;
      }
      temp = temp.next;
    }
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  /**
   * Removes a node at the specified index.
   * @param {number} idx The index of the element to remove.
   * @returns {Node} The removed node.
   */
  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === 0) return this.shift(idx);
    if (idx === this.length - 1) return this.pop(idx);

    let prev,
      temp = this.head;
    for (let i = 0; i < idx; i++) {
      if (temp.next) {
        prev = temp;
      }
      temp = temp.next;
    }
    prev.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }

  /**
   * Reverses the nodes in the LinkedList.
   * @returns {LinkedList} The reversed LinkedList.
   */
  reverse() {
    // Edge case: empty list or single node
    if (!this.head || !this.head.next) return this;

    // Initialize pointers
    let prev = null;
    let current = this.head;
    let next = null;

    // Swap head and tail
    this.tail = this.head;

    // Reverse the pointers
    while (current !== null) {
      // Store next before we overwrite current.next
      next = current.next;

      // Reverse the pointer
      current.next = prev;

      // Move pointers one position ahead
      prev = current;
      current = next;
    }

    // Update head
    this.head = prev;

    return this;
  }
}

module.exports = { LinkedList, Node };
