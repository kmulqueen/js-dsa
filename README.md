# JavaScript Data Structures & Algorithms

This repository contains implementation examples, exercises, and solutions for various data structures and algorithms in JavaScript. It serves as a companion to a comprehensive data structures and algorithms course.

## Current Focus: Linked Lists

Linked Lists are fundamental data structures that store elements sequentially, with each element pointing to the next one in the sequence. Unlike arrays, linked lists don't require contiguous memory allocation.

### Time Complexity Analysis

| Operation                     | Time Complexity | Explanation                                                       |
| ----------------------------- | --------------- | ----------------------------------------------------------------- |
| Append (Add to end)           | O(1)            | Constant time operation as we maintain a tail pointer             |
| Pop (Remove from end)         | O(n)            | Linear time operation as we need to traverse to find the new tail |
| Prepend (Add to beginning)    | O(1)            | Constant time operation regardless of list size                   |
| Shift (Remove from beginning) | O(1)            | Constant time operation regardless of list size                   |

### Implementation Details

#### Adding a Node to the End (Append): O(1)

The append operation follows these steps:

1. Point the last node to the new node
2. Update the tail pointer to the newly added node

This operation always takes the same number of steps regardless of list size.

#### Removing a Node from the End (Pop): O(n)

The pop operation requires:

1. Traversing the entire list to find the node just before the last node
2. Setting this node as the new tail
3. Updating its next pointer to null

This is an O(n) operation as we must iterate through the list.

#### Adding a Node to the Beginning (Prepend): O(1)

The prepend operation follows these steps:

1. Set the new node's next pointer to the current head
2. Update the head pointer to the new node

This takes constant time regardless of list size.

#### Removing a Node from the Beginning (Shift): O(1)

The shift operation requires:

1. Update the head pointer to head.next

This is a constant time operation.
