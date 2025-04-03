# Recursive Factorial of a Number

# Recursive Factorial of a Number by using Recursive
def recursiveFactorial(n):
    if n <= 1:
        return 1
    return n * recursiveFactorial(n - 1)

print(recursiveFactorial(4))

# Recursive Factorial of a Number Without using Recursive

def FactorialNumbers(n):
    initValue = 1
    for i in range(2 , n + 1):
        initValue *= i
    return initValue

print(FactorialNumbers(-5))