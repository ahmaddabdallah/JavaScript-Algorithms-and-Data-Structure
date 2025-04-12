def binarySearch(array, target):
#     leftIndex = 0
#     rightIndex = len(array) - 1

#     while leftIndex <= rightIndex:
#         middleIndex = math.floor((leftIndex + rightIndex) / 2)
#         if target == array[middleIndex]:
#             return middleIndex
#         if target < array[middleIndex]:
#             rightIndex = middleIndex - 1
#         else:
#             leftIndex = middleIndex + 1
#     return -1