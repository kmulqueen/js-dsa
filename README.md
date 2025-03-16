# JavaScript Data Structures & Algorithms

This repository contains implementation examples, exercises, and solutions for various data structures and algorithms in JavaScript. It serves as a companion to a comprehensive data structures and algorithms course.

<!-- vscode-markdown-toc -->

- 1. [Linked Lists](#LinkedLists)
  - 1.1. [Time Complexity Analysis](#TimeComplexityAnalysis)
  - 1.2. [Implementation Details](#ImplementationDetails)
    - 1.2.1. [Adding a Node to the End (Append): O(1)](#AddingaNodetotheEndAppend)
    - 1.2.2. [Removing a Node from the End (Pop): O(n)](#RemovingaNodefromtheEndPop)
    - 1.2.3. [Adding a Node to the Beginning (Prepend/Unshift): O(1)](#AddingaNodetotheBeginningPrepend)
    - 1.2.4. [Removing a Node from the Beginning (Shift): O(1)](#RemovingaNodefromtheBeginningShift)
    - 1.2.5. [Reversing the order of Nodes (Reverse): O(n)](#ReversingtheorderofNodesReverse)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

## 1. <a name='LinkedLists'></a>Linked Lists

Linked Lists are fundamental data structures that store elements sequentially, with each element pointing to the next one in the sequence. Unlike arrays, linked lists don't require contiguous memory allocation.

### 1.1. <a name='TimeComplexityAnalysis'></a>Time Complexity Analysis

| Operation                          | Time Complexity | Explanation                                                                  |
| ---------------------------------- | --------------- | ---------------------------------------------------------------------------- |
| Append (Add to end)                | O(1)            | Constant time operation as we maintain a tail pointer                        |
| Pop (Remove from end)              | O(n)            | Linear time operation as we need to traverse to find the new tail            |
| Prepend/Unshift (Add to beginning) | O(1)            | Constant time operation regardless of list size                              |
| Shift (Remove from beginning)      | O(1)            | Constant time operation regardless of list size                              |
| Reverse                            | O(n)            | Linear time operation as we need to traverse and reverse each node's pointer |

### 1.2. <a name='ImplementationDetails'></a>Implementation Details

#### 1.2.1. <a name='AddingaNodetotheEndAppend'></a>Adding a Node to the End (Append): O(1)

The append operation follows these steps:

1. Point the last node to the new node
2. Update the tail pointer to the newly added node

This operation always takes the same number of steps regardless of list size.

#### 1.2.2. <a name='RemovingaNodefromtheEndPop'></a>Removing a Node from the End (Pop): O(n)

The pop operation requires:

1. Traversing the entire list to find the node just before the last node
2. Setting this node as the new tail
3. Updating its next pointer to null

This is an O(n) operation as we must iterate through the list.

#### 1.2.3. <a name='AddingaNodetotheBeginningPrepend'></a>Adding a Node to the Beginning (Prepend/Unshift): O(1)

The prepend/unshift operation follows these steps:

1. Set the new node's next pointer to the current head
2. Update the head pointer to the new node

This takes constant time regardless of list size.

#### 1.2.4. <a name='RemovingaNodefromtheBeginningShift'></a>Removing a Node from the Beginning (Shift): O(1)

The shift operation requires:

1. Update the head pointer to head.next

This is a constant time operation. This is a place where Linked Lists are better than Arrays. Arrays are O(n) when removing the first item because of the reindexing that is required.

#### 1.2.5. <a name='ReversingtheorderofNodesReverse'></a>Reversing the order of Nodes (Reverse): O(n)

The standard algorithm for reversing a linked list involves:

1. Tracking three pointers (previous, current, and next)
2. Iterating through each node
3. Reversing each node's pointer as you go
4. Updating the head and tail pointers at the end

This is an O(n) operation as we must iterate through the list.
