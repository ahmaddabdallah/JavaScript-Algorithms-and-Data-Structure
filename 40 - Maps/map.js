/*
    --------------------------
    -------   Maps   ---------
    --------------------------

    Maps are collections of key-value pairs where both the keys and values can be of any type.
    Unlike objects, Maps allow any type of value as a key (including objects, functions, and primitives).
    Maps maintain the insertion order of elements and provide methods for easy manipulation.

    Common Map operations:
    - Creating a map: new Map()
    - Adding elements: map.set(key, value)
    - Retrieving elements: map.get(key)
    - Checking if a key exists: map.has(key)
    - Removing elements: map.delete(key)
    - Getting the size: map.size
    - Clearing the map: map.clear()
    - Iterating: map.forEach(), for...of loops
*/

let map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
  ['f', 4],
  ['e', 5],
]);

for (let [key, value] of map) {
  console.log(`${key} : ${value}`);
}

console.log(`The Value of the A is ${map.get('a')}`);
console.log(`The Size of the Map List is : ${map.size}`);
