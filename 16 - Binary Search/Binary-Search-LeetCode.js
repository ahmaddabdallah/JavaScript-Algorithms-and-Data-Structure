/*
    1- Binary Search is used to iterate over the Sorted Array if not you should try linear search 

    2- Declare the variable that can find the left Index that is start with 0

    3- Declare the right Index that c   an contain the total length of the array - 1
    (arr.length - 1)

    4- check if the number rightIndex is greater than or equal the leftIndex => if true.

    5- Declare a variable that contain the value of the middle => (rightIndex + leftIndex) / 2 : you should round the value into nearest value.

    6- Check if the target === arr[middle] => return i

    7- If arr[middle] is greater than target => rightIndex = middle - 1

8- Else : 
      leftIndex = middle + 1
*/

var search = function (nums, target) {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;
  while (leftIndex <= rightIndex) {
    let middle = Math.round((rightIndex + leftIndex) / 2);

    if (target == nums[middle]) {
      return middle;
    }

    if (target < nums[middle]) {
      rightIndex = middle - 1;
    } else {
      leftIndex = middle + 1;
    }
  }
  return -1;
};
