// LinkedList.test.js
const { LinkedList, Node } = require("./LinkedList");

describe("LinkedList", () => {
  let myLinkedList;

  beforeEach(() => {
    // Create a new LinkedList before each test
    myLinkedList = new LinkedList(1);
  });

  // ! ========= Init tests ==========
  test("Initialize - should initialize with a single node", () => {
    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(1);
    expect(myLinkedList.getLength()).toBe(1);
  });

  test("Initialize - should be able to make the list empty", () => {
    myLinkedList.makeEmpty();
    expect(myLinkedList.getHead()).toBeNull();
    expect(myLinkedList.getTail()).toBeNull();
    expect(myLinkedList.getLength()).toBe(0);
  });

  // ! ========= Push tests ==========
  test("Push - should push values to the end of the list", () => {
    myLinkedList.push(2);
    expect(myLinkedList.getTail()).toBe(2);
    expect(myLinkedList.getLength()).toBe(2);

    myLinkedList.push(3);
    expect(myLinkedList.getTail()).toBe(3);
    expect(myLinkedList.getLength()).toBe(3);

    // Check all values in the list
    expect(myLinkedList.printList()).toEqual([1, 2, 3]);
  });

  test("Push - should push to an empty list properly", () => {
    myLinkedList.makeEmpty();
    myLinkedList.push(5);
    expect(myLinkedList.getHead()).toBe(5);
    expect(myLinkedList.getTail()).toBe(5);
    expect(myLinkedList.getLength()).toBe(1);
  });

  test("Push - should maintain correct references after multiple operations", () => {
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
  test("Pop - should return undefined when popping from an empty list", () => {
    myLinkedList.makeEmpty();
    expect(myLinkedList.pop()).toBeUndefined();
    expect(myLinkedList.getLength()).toBe(0);
  });

  test("Pop - should remove and return the last element when popping", () => {
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

  test("Pop - should handle popping the last element correctly", () => {
    // List starts with just [1]
    expect(myLinkedList.pop()).toBe(1);
    expect(myLinkedList.getHead()).toBeNull();
    expect(myLinkedList.getTail()).toBeNull();
    expect(myLinkedList.getLength()).toBe(0);
    expect(myLinkedList.printList()).toEqual([]);
  });

  test("Pop - should maintain correct references after mixed push and pop operations", () => {
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

  // ! ========= Unshift tests ==========
  test("Unshift - should correctly unshift element to existing list", () => {
    myLinkedList.unshift(2); // [2, 1]

    expect(myLinkedList.getHead()).toBe(2);
    expect(myLinkedList.getTail()).toBe(1);
    expect(myLinkedList.getLength()).toBe(2);
    expect(myLinkedList.printList()).toEqual([2, 1]);
  });

  test("Unshift - should correctly unshift element to empty list", () => {
    myLinkedList.makeEmpty();

    myLinkedList.unshift(5);

    expect(myLinkedList.getHead()).toBe(5);
    expect(myLinkedList.getTail()).toBe(5);
    expect(myLinkedList.getLength()).toBe(1);
    expect(myLinkedList.printList()).toEqual([5]);
  });

  // ! ========= Shift tests ==========
  test("Shift - should properly shift element from list", () => {
    myLinkedList.push(2);

    myLinkedList.shift();

    expect(myLinkedList.getHead()).toBe(2);
    expect(myLinkedList.getTail()).toBe(2);
    expect(myLinkedList.getLength()).toBe(1);
    expect(myLinkedList.printList()).toEqual([2]);
  });

  test("Shift - should properly shift element from a list with only 1 element", () => {
    myLinkedList.shift();

    expect(myLinkedList.getHead()).toBeNull();
    expect(myLinkedList.getTail()).toBeNull();
    expect(myLinkedList.getLength()).toBe(0);
    expect(myLinkedList.printList()).toEqual([]);
  });

  // ! ========= Get tests ==========
  test("Get - should return undefined for out-of-bounds indices", () => {
    expect(myLinkedList.get(-1)).toBeUndefined();
    expect(myLinkedList.get(10)).toBeUndefined();
  });

  test("Get - should return correct node for various indices", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);

    expect(myLinkedList.get(0).value).toBe(1);
    expect(myLinkedList.get(1).value).toBe(2);
    expect(myLinkedList.get(2).value).toBe(3);
  });

  // ! ========= Set tests ==========
  test("Set - should return undefined for out-of-bounds indices", () => {
    expect(myLinkedList.set(-1, 100)).toBeUndefined();
    expect(myLinkedList.set(10, 12)).toBeUndefined();
  });

  test("Set - should return correct node with updated value(s) for various indices", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);

    expect(myLinkedList.set(0, 10).value).toBe(10);
    expect(myLinkedList.set(1, 20).value).toBe(20);
    expect(myLinkedList.set(2, 30).value).toBe(30);
  });

  // ! ========= Insert tests ==========
  test("Insert - should return undefined for out-of-bounds indices", () => {
    expect(myLinkedList.insert(-1, 100)).toBeUndefined();
    expect(myLinkedList.insert(10, 12)).toBeUndefined();
  });

  test("Insert - should insert new node at correct index within list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.insert(2, 10);

    expect(myLinkedList.printList()).toEqual([1, 2, 10, 3, 4]);
    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(4);
    expect(myLinkedList.get(2).value).toBe(10);
    expect(myLinkedList.get(3).value).toBe(3);
    expect(myLinkedList.get(1).value).toBe(2);
    expect(myLinkedList.getLength()).toBe(5);
  });

  test("Insert - should insert new node at correct index at beginning of list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.insert(0, 10);

    expect(myLinkedList.printList()).toEqual([10, 1, 2, 3, 4]);
    expect(myLinkedList.getHead()).toBe(10);
    expect(myLinkedList.getTail()).toBe(4);
    expect(myLinkedList.get(2).value).toBe(2);
    expect(myLinkedList.getLength()).toBe(5);
  });

  test("Insert - should insert new node at correct index at end of list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.insert(4, 10);

    expect(myLinkedList.printList()).toEqual([1, 2, 3, 4, 10]);
    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(10);
    expect(myLinkedList.get(3).value).toBe(4);
    expect(myLinkedList.getLength()).toBe(5);
  });

  // ! ========= Remove tests ==========
  test("Remove - should return undefined for out-of-bounds indices", () => {
    expect(myLinkedList.remove(-1, 100)).toBeUndefined();
    expect(myLinkedList.remove(10, 12)).toBeUndefined();
  });

  test("Remove - should remove new node at correct index within list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.remove(2);

    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(4);
    expect(myLinkedList.get(2).value).toBe(4);
    expect(myLinkedList.getLength()).toBe(3);
    expect(myLinkedList.printList()).toEqual([1, 2, 4]);
  });

  test("Remove - should remove new node at correct index at beginning of list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.remove(0);

    expect(myLinkedList.getHead()).toBe(2);
    expect(myLinkedList.getTail()).toBe(4);
    expect(myLinkedList.get(1).value).toBe(3);
    expect(myLinkedList.getLength()).toBe(3);
    expect(myLinkedList.printList()).toEqual([2, 3, 4]);
  });

  test("Remove - should remove new node at correct index at end of list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);
    myLinkedList.push(4);

    myLinkedList.remove(3);

    expect(myLinkedList.getHead()).toBe(1);
    expect(myLinkedList.getTail()).toBe(3);
    expect(myLinkedList.get(1).value).toBe(2);
    expect(myLinkedList.getLength()).toBe(3);
    expect(myLinkedList.printList()).toEqual([1, 2, 3]);
  });

  // ! ========= Reverse tests ==========
  test("Reverse - should properly reverse linked list", () => {
    myLinkedList.push(2);
    myLinkedList.push(3);

    myLinkedList.reverse();

    expect(myLinkedList.getHead()).toBe(3);
    expect(myLinkedList.getTail()).toBe(1);
    expect(myLinkedList.get(1).value).toBe(2);
    expect(myLinkedList.getLength()).toBe(3);
    expect(myLinkedList.printList()).toEqual([3, 2, 1]);
  });
});
