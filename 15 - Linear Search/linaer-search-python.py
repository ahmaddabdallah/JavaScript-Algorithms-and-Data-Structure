# Linear Search Using Python

def linear_search(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1

# Test cases for linear search
print('Test Cases for Linear Search:')

# Test case 1: Target exists in the middle of the array
arr1 = [1, 2, 3, 4, 5]
target1 = 3
print(f"Test 1: Finding {target1} in {arr1} - Expected: 2, Result: {linear_search(arr1, target1)}")

# Test case 2: Target exists at the beginning of the array
arr2 = [10, 20, 30, 40, 50]
target2 = 10
print(f"Test 2: Finding {target2} in {arr2} - Expected: 0, Result: {linear_search(arr2, target2)}")

# Test case 3: Target exists at the end of the array
arr3 = [11, 22, 33, 44, 55]
target3 = 55
print(f"Test 3: Finding {target3} in {arr3} - Expected: 4, Result: {linear_search(arr3, target3)}")

# Test case 4: Target does not exist in the array
arr4 = [5, 10, 15, 20, 25]
target4 = 12
print(f"Test 4: Finding {target4} in {arr4} - Expected: -1, Result: {linear_search(arr4, target4)}")

# Test case 5: Empty array
arr5 = []
target5 = 5
print(f"Test 5: Finding {target5} in {arr5} - Expected: -1, Result: {linear_search(arr5, target5)}")