const obj1 = { a : 1, b : 2 };
const obj2 = { c : 3 };

// add members obj1 and obj2  to obj3
const obj3 = {...obj1, ...obj2};

console.log(obj3); // {a: 1, b: 2, c: 3} 