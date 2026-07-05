'''
    --------------------------
    --- Objects in Python ----
    -------------------------
'''

objectOne = {
    "name": "John Doe",
    "age": 20,
    "student_id": "ST12345",
    "major": "Computer Science",
    "year": 3,
    "gpa": 3.8,
    "courses": ["Programming", "Data Structures", "Algorithms"],
    "contact": {
        "email": "john.doe@university.edu",
        "phone": {"num1": 101, "num2": 202}
    },
    "is_enrolled": True
}

# for key in objectOne:
#     print(f"{key} : {objectOne[key]}")

print("Your age is : ", objectOne["age"])

print(f"Your First Number is : {objectOne["contact"]["phone"]["num1"]}")

# del objectOne["contact"]
# print(objectOne)

# --------------


# 1. Insertion - O(1)
objectOne["graduation_year"] = 2023
print("After insertion:", objectOne["graduation_year"])

# 2. Removal - O(1)
if "graduation_year" in objectOne:
    del objectOne["graduation_year"]
    print("Graduation year removed")

# 3. Access - O(1)
student_name = objectOne["name"]
print("Access:", student_name)

# 4. Searching (key existence) - O(1)
if "age" in objectOne:
    print("Age exists in the object")

# 5. Get all keys - O(n)
all_keys = objectOne.keys()
print("All keys:", all_keys)

# 6. Get all values - O(n)
all_values = objectOne.values()
print("All values:", all_values)

# 7. Get all key-value pairs - O(n)
all_items = objectOne.items()
print("All items:", all_items)

# 8. Update multiple key-values at once - O(n)
objectOne.update({"status": "Active", "semester": "Fall"})
print("After update:", objectOne["status"], objectOne["semester"])

# 9. Get with default value - O(1)
advisor = objectOne.get("advisor", "Not Assigned")
print("Advisor:", advisor)  # Returns default if key doesn't exist

# 10. Pop (remove and return) - O(1)
if "semester" in objectOne:
    semester = objectOne.pop("semester")
    print("Popped semester:", semester)

# 11. Clear all items - O(n)
temp_obj = objectOne.copy()  # Create a copy to demonstrate
temp_obj.clear()
print("After clear:", temp_obj)  # Empty dictionary

# 12. Copy - O(n)
object_copy = objectOne.copy()
print("Copy created with keys:", object_copy.keys())
