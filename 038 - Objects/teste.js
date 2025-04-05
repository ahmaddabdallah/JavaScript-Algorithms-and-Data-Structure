obj = {name : "Ahmad" , age : 18 , number : 101}

// 3. Access - O(1)
const studentName = obj.name;
console.log('Access:', studentName);

// 4. Searching (key existence) - O(1)
const hasAge = 'age' in obj;
console.log('Age exists in the obj:', hasAge);

// 5. Get all keys - O(n)
const allKeys = Object.keys(obj);
console.log('All keys:', allKeys);

// 6. Get all values - O(n)
const allValues = Object.values(obj);
console.log('All values:', allValues);

// 7. Get all key-value pairs - O(n)
const allEntries = Object.entries(obj);
console.log('All entries:', allEntries);