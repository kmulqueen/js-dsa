// LinkedList.test.js
const { LinkedList, Node } = require("./LinkedList");

describe("LinkedList", () => {
  let myLinkedList;

  beforeEach(() => {
    // Create a new LinkedList before each test
    myLinkedList = new LinkedList(1);
  });

  // ! ========= Init tests ==========
  test("should initialize with a single node", () => {
    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(1);
    expect(myLinkedList.getLength()).toBe(1);
  });

  test("should be able to make the list empty", () => {
    myLinkedList.makeEmpty();
    expect(myLinkedList.getHead()).toBeNull();
    expect(myLinkedList.getTail()).toBeNull();
    expect(myLinkedList.getLength()).toBe(0);
  });

  // ! ========= Push tests ==========
  test("should push values to the end of the list", () => {
    myLinkedList.push(2);
    expect(myLinkedList.getTail()).toBe(2);
    expect(myLinkedList.getLength()).toBe(2);

    myLinkedList.push(3);
    expect(myLinkedList.getTail()).toBe(3);
    expect(myLinkedList.getLength()).toBe(3);

    // Check all values in the list
    expect(myLinkedList.printList()).toEqual([1, 2, 3]);
  });

  test("should push to an empty list properly", () => {
    myLinkedList.makeEmpty();
    myLinkedList.push(5);
    expect(myLinkedList.getHead()).toBe(5);
    expect(myLinkedList.getTail()).toBe(5);
    expect(myLinkedList.getLength()).toBe(1);
  });

  test("should maintain correct references after multiple operations", () => {
    myLinkedList.makeEmpty();
    myLinkedList.push(10);
    myLinkedList.push(20);
    myLinkedList.push(30);

    expect(myLinkedList.getHead()).toBe(10);
    expect(myLinkedList.getTail()).toBe(30);
    expect(myLinkedList.getLength()).toBe(3);
    expect(myLinkedList.printList()).toEqual([10, 20, 30]);
  });

  // ! ========= Pop tests ==========
  test("should return undefined when popping from an empty list", () => {
    myLinkedList.makeEmpty();
    expect(myLinkedList.pop()).toBeUndefined();
    expect(myLinkedList.getLength()).toBe(0);
  });

  test("should remove and return the last element when popping", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);

    // List should now be [1, 2, 3]
    expect(myLinkedList.pop()).toBe(3);
    expect(myLinkedList.getLength()).toBe(2);
    expect(myLinkedList.getTail()).toBe(2);
    expect(myLinkedList.printList()).toEqual([1, 2]);

    expect(myLinkedList.pop()).toBe(2);
    expect(myLinkedList.getLength()).toBe(1);
    expect(myLinkedList.getTail()).toBe(1);
    expect(myLinkedList.printList()).toEqual([1]);
  });

  test("should handle popping the last element correctly", () => {
    // List starts with just [1]
    expect(myLinkedList.pop()).toBe(1);
    expect(myLinkedList.getHead()).toBeNull();
    expect(myLinkedList.getTail()).toBeNull();
    expect(myLinkedList.getLength()).toBe(0);
    expect(myLinkedList.printList()).toEqual([]);
  });

  test("should maintain correct references after mixed push and pop operations", () => {
    myLinkedList.push(2); // [1, 2]
    myLinkedList.pop(); // [1]
    myLinkedList.push(3); // [1, 3]
    myLinkedList.push(4); // [1, 3, 4]
    myLinkedList.pop(); // [1, 3]

    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(3);
    expect(myLinkedList.getLength()).toBe(2);
    expect(myLinkedList.printList()).toEqual([1, 3]);
  });
});
