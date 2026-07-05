"""
    --------------------------
    -------   Stack   --------
    --------------------------
"""

MAX_SIZE = 3

class Stack:
    def __init__(self):
        self.top = -1
        self.items = [None] * MAX_SIZE
    
    def is_empty(self):
        return self.top < 0
    
    def push(self, element):
        if self.top >= MAX_SIZE - 1:
            print("Stack full on push")
        else:
            self.top += 1
            self.items[self.top] = element
    
    def pop(self):
        if self.is_empty():
            print("Stack empty on pop")
            return None
        else:
            element = self.items[self.top]
            self.top -= 1
            return element
    
    def get_top(self):
        if self.is_empty():
            print("Stack empty on getTop")
            return None
        else:
            stack_top = self.items[self.top]
            print(stack_top)
            return stack_top
    
    def print(self):
        output = "[ "
        for i in range(self.top, -1, -1):
            output += str(self.items[i]) + " "
        output += "]"
        print(output)

# Example usage
s = Stack()
s.push(5)
s.push(15)
s.push(20)
s.print()