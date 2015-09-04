## Doubly Linked List (Javascript)

**Problems**:

1. Write a function to return the most frequent value in the linked list.
2. Write a function called rotate that takes 2 parameters.  The first is how many locations the list should rotate.  The second is true if the list should rotate forward and false if it should rotate backwards.  For example, if the list is 1,2,3,4 and `rotate(2,true)` is called, the list would become 3,4,1,2.  If `rotate(1,false)` is called on the same list, the new list would be 2,3,4,1.
3. Write a function that sorts the list (you can start with bubble sort, but try something more complicated like merge sort or quick sort).
4. Make another class that uses the `DoublyLinkedList` class.  The class should be a `SortedLinkList`.  The `SortedLinkList` will always maintain a sorted order for you.  For example, if the list contains 4,8,11,22,55 and `insert(13)` is called, the new list will be 4,8,11,13,22,55.  Since this is now a `SortedLinkList`, the following methods aren't needed: `push`, `pop`, `shift`, `unshift`.  Also, `set`, should be replaced with `insert`, which does not take an index.  Insert takes a value, only.