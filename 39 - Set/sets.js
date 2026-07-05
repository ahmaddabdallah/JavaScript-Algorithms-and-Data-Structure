/*
    --------------------------
    -------   Sets   ---------
    --------------------------
*/

let mySet = new Set([1, 2, 3, 4, 5, 6, 7, 8]);

mySet.add(90);
mySet.add(60);
mySet.add(30);

// console.log(mySet);
console.log(`This is total length of the Set : ${mySet.size}`);

for (let item of mySet) {
  console.log(item);
}

