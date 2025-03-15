# Linked Lists

## BIG O

### Adding node to end of list: O(1)

Thinking about the steps:

1. Have last item point to the new node.
2. Move `tail` pointer to the newly added node position

Always has same number of steps regardless of how many nodes are in the list currently.

### Removing item from end of the list: O(n)

Need to iterate through the entire list to get to the pointer that is just before the last node. Then set `tail` pointer to that node.

### Adding item to beginning of the list: O(1)

1. Set the pointer of the new node equal to the pointer of head
2. Set head equal to the new node

### Removing item from beginning of list: O(1)

1. Set head equal to `head.next`
