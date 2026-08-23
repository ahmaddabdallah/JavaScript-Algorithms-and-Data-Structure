/* Objects and Arrays Big-O - Demonstrating O(1) vs O(n) Operations */

// =============================================================================
// PART 1: OBJECTS - O(1) vs O(n) Operations
// =============================================================================

console.log('========= OBJECTS OPERATIONS =========');

// Example Object
const userProfile = {
    id: 101,
    name: 'Ahmad',
    email: 'ahmad@example.com',
    isActive: true,
    preferences: ['coding', 'reading']
};

// O(1) OPERATIONS - Constant Time
// =============================================================

// 1. Property Access - O(1)
// Directly accessing a known property
const nameAccess = userProfile.name;  // O(1)
console.log('1. Access O(1):', nameAccess);

// 2. Property Insertion - O(1)
// Adding a new property or modifying an existing one
userProfile.age = 30;  // O(1)
console.log('2. Insert O(1):', userProfile);

// 3. Property Deletion - O(1)
// Removing a specific property
delete userProfile.isActive;  // O(1)
console.log('3. Delete O(1):', userProfile);

// O(n) OPERATIONS - Linear Time
// =============================================================

// 4. Searching for a Value (without knowing the key) - O(n)
// Need to loop through all properties to find a specific value
function findPropertyByValue(obj, targetValue) {
    for (const key in obj) {
        if (obj[key] === targetValue) {
            return "Found at key: " + key;
        }
    }
    return null;
}

const searchResult = findPropertyByValue(userProfile, 'Ahmad');  // O(n)
console.log('4. Search O(n):', searchResult);

// 5. Object.keys() - O(n)
// Converts object to array of keys
const allKeys = Object.keys(userProfile);  // O(n)
console.log('5. Object.keys() O(n):', allKeys);

// 6. Object.values() - O(n)
// Converts object to array of values
const allValues = Object.values(userProfile);  // O(n)
console.log('6. Object.values() O(n): ', allValues);

// 7. Object.entries() - O(n)
// Converts object to array of [key, value] pairs
const allEntries = Object.entries(userProfile);  // O(n)
console.log('7. Object.entries() O(n):', allEntries);

// O(1) vs O(n) Real-World Example
// =============================================================

const largeDatabase = {
    'user-001': { name: 'Alice', age: 25 },
    'user-002': { name: 'Bob', age: 30 },
    'user-003': { name: 'Charlie', age: 35 },
    'user-004': { name: 'Diana', age: 28 },
    'user-005': { name: 'Eve', age: 32 }
};

// O(1) - Direct access with known user ID
const aliceProfile = largeDatabase['user-001'];  // O(1)
console.log('8. O(1) Access:', aliceProfile);

// O(n) - Searching for a user by name (don't know the key)
function findUserByName(database, targetName) {
    for (const userId in database) {
        if (database[userId].name === targetName) {
            return database[userId];
        }
    }
    return null;
}

const targetUser = findUserByName(largeDatabase, 'Charlie');  // O(n)
console.log('9. O(n) Search:', targetUser);

// =============================================================================
// PART 2: ARRAYS - O(1) vs O(n) Operations
// =============================================================================

console.log('\n========= ARRAYS OPERATIONS =========');

let shoppingCart = ['Laptop', 'Mouse', 'Keyboard', 'Monitor', 'USB Cable'];

// O(1) OPERATIONS
// =============================================================

// 8. Access by Index - O(1)
const firstItem = shoppingCart[0];  // O(1)
console.log('10. Access O(1):', firstItem);

// 9. Push (Insert at End) - O(1)
shoppingCart.push('Headphones');  // O(1)
console.log('11. Push O(1):', shoppingCart);

// 10. Pop (Delete from End) - O(1)
const removedItem = shoppingCart.pop();  // O(1)
console.log('12. Pop O(1):', removedItem);

// O(n) OPERATIONS
// =============================================================

// 11. Unshift (Insert at Beginning) - O(n)
// All existing elements must shift right to make room
console.log('13. Before unshift:', shoppingCart);
shoppingCart.unshift('New Item');  // O(n) - shifts all elements
console.log('14. After unshift:', shoppingCart);

// 12. Shift (Delete from Beginning) - O(n)
// All elements must shift left to close the gap
console.log('15. Before shift:', shoppingCart);
shoppingCart.shift();  // O(n) - shifts all elements
console.log('16. After shift:', shoppingCart);

// 13. Search with indexOf - O(n)
const keyboardIndex = shoppingCart.indexOf('Keyboard');  // O(n)
console.log('17. indexOf O(n):', keyboardIndex);

// 14. Search with includes - O(n)
const hasMonitor = shoppingCart.includes('Monitor');  // O(n)
console.log('18. includes O(n):', hasMonitor);

// 15. Slice (Create Copy) - O(n)
// Creates a new array, copying the specified elements
const cartSubset = shoppingCart.slice(0, 3);  // O(n)
console.log('19. slice O(n):', cartSubset);

// 16. Splice (Delete/Insert) - O(n)
// More complex operation that affects array structure
console.log('20. Before splice:', shoppingCart);
shoppingCart.splice(1, 1, 'Replaced Item', 'Extra Item');  // O(n)
console.log('21. After splice:', shoppingCart);

// 17. Array Methods (map, filter, reduce) - O(n)
const cartPrices = shoppingCart.map(item => ({ item, price: Math.random() * 100 }));  // O(n)
console.log('22. map O(n):', cartPrices);

const highPricedItems = shoppingCart.filter(item => item.length > 6);  // O(n)
console.log('23. filter O(n):', highPricedItems);

const totalChars = shoppingCart.reduce((total, item) => total + item.length, 0);  // O(n)
console.log('24. reduce O(n) - Total characters:', totalChars);

// =============================================================================
// PERFORMANCE COMPARISON EXAMPLE
// =============================================================================

console.log('\n========= PERFORMANCE COMPARISON =========');

const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const largeObject = {};
for (let i = 0; i < 1000000; i++) {
    largeObject[`id_${i}`] = `value_${i}`;
}

// O(1) Operations vs O(n)
const startTime = Date.now();
const arrayAccess = largeArray[0];  // O(1)
const arrayAccessTime = Date.now() - startTime;
console.log('25. O(1) Array Access Time:', arrayAccessTime, 'ms');

const objectAccess = largeObject['id_0'];  // O(1)
const objectAccessTime = Date.now() - startTime;
console.log('26. O(1) Object Access Time:', objectAccessTime, 'ms');

// O(n) Operations
const startTime2 = Date.now();
for (let i = 0; i < 1000; i++) {
    largeArray.indexOf(Math.floor(Math.random() * 1000000));  // O(n) inside loop = O(n²)
}
const arraySearchTime = Date.now() - startTime2;
console.log('27. O(n²) Array Search (1000 iterations):', arraySearchTime, 'ms');

const startTime3 = Date.now();
largeArray.includes(0);  // O(n)
const arrayIncludesTime = Date.now() - startTime3;
console.log('28. O(n) Array.includes():', arrayIncludesTime, 'ms');

const startTime4 = Date.now();
largeArray.slice(0, 100);  // O(n)
const arraySliceTime = Date.now() - startTime4;
console.log('29. O(n) Array.slice(0, 100):', arraySliceTime, 'ms');

console.log('\n================ SUMMARY ============');
console.log('O(1) Operations: Property/Object/Array access, push, pop');
console.log('O(n) Operations: Search, shift, unshift, slice, splice, map/filter/reduce');
console.log('Always prefer O(1) operations when possible for better performance!');
