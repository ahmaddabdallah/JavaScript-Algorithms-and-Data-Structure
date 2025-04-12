# Recursive Fibonacci Sequence

# Big O: O(2^n)
def recursive_Fibonacci(n):
    if n < 2:
        return n
    return recursive_Fibonacci(n - 1) + recursive_Fibonacci(n - 2)

print(recursive_Fibonacci(0))  # 0
print(recursive_Fibonacci(1))  # 1
print(recursive_Fibonacci(7))  # 13
print(recursive_Fibonacci(8))  # 21
print(recursive_Fibonacci(6))  # 8


print(recursive_Fibonacci(6))
