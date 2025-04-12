/* Linear Search */

/*
    Problem: Implement a linear search algorithm.

    Linear search is a simple search algorithm that finds the position of a target 
    value within a list.

    It sequentially checks each element of the list until a match is found or the whole
    list has been searched.

    Rules:
        - Return the index of the target element if found
        - Return -1 if the target element is not in the array
*/

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // Big-O(n)
    if (arr[i] == target) {
      // Big-O(1)
      return i;
    }
  }
  return -1;
}

// Test cases
console.log(linearSearch([1, 2, 3, 4, 5], 3)); // Expected: 2
console.log(linearSearch([10, 20, 30, 40, 50], 40)); // Expected: 3
console.log(linearSearch([10, 20, 30, 40, 50], 60)); // Expected: -1
console.log(linearSearch([], 10)); // Expected: -1
console.log(linearSearch([], 20)); // Expected: -1
