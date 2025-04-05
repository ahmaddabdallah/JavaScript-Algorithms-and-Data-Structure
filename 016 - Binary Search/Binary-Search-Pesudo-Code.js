/* Binary Search */

/*
Binary Search Algorithm:

    1. Binary search is an efficient algorithm for finding a target value within a sorted array.
    2. It works by repeatedly dividing the search interval in half.

    How it works:
    1. Start with the entire sorted array.
    2. Find the middle element of the array.
    3. If the middle element is the target, return its position (search complete).
    4. If the target is less than the middle element, repeat the search on the left half.
    5. If the target is greater than the middle element, repeat the search on the right half.
    6. If the search interval is empty, the target is not in the array.

    Time Complexity: O(log n) - where n is the number of elements in the array
    Space Complexity: O(1) for iterative implementation, O(log n) for recursive implementation
*/