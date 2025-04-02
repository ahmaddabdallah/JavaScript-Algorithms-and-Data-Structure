/* Objects and Arrays Big-O */

// Objects

ObjectPairs = {
  a: 'b',
  c: 'd',
};

// Insertion - O(1)
ObjectPairs['e'] = 'f';

// Removal - O(1)
delete ObjectPairs['a'];

// Access - O(1)
ObjectPairs['a'];

// Searching - O(n)
ObjectPairs.hasOwnProperty('a');

// Object.keys() - O(n)
Object.keys(ObjectPairs);

// Object.values() - O(n)
Object.values(ObjectPairs);

// Object.entries() - O(n)
Object.entries(ObjectPairs)

console.log(ObjectPairs);

console.log('--------------------------------');

// Arrays

arrayList = ['a', 'b', 'c', 'd'];

// Insertion - O(n)
arrayList.push('e');

// Removal - O(n)
arrayList.pop();

// Access - O(1)
arrayList[0];

// Searching - O(n)
arrayList.indexOf('c');

// push - O(1)
arrayList.push('e');

// pop - O(1)
arrayList.pop();

// shift - O(n)
arrayList.shift();

// unshift - O(n)
arrayList.unshift('a');

// concat - O(n)
arrayList.concat(['f', 'g']);

// slice - O(n)
arrayList.slice(0, 2);

// splice - O(n)
arrayList.splice(0, 2);

console.log(arrayList);
