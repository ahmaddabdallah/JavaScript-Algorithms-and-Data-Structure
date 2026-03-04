def multiply(a=2, b=5):
    return a * b


# Call multiply() with default values (2, 5)
print(multiply())  # Output: 10

# Call multiply() with a=3, b=5 (default)
print(multiply(3))  # Output: 15

# Call multiply() with a=2, b=3
print(multiply(2, 3))  # Output: 6
print("-" * 30)


class Person:
    def __init__(self, name, age):
        # Initialize the object with name and age
        self.name = name
        self.age = age


objectOne = Person("John", 30)
print(objectOne.name)  # Output: John
print(objectOne.age)  # Output: 30
print(objectOne.__dict__)  # Output: {'name': 'John', 'age': 30}
