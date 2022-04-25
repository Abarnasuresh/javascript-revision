const a = {};
const object1 = Object.create(a);

console.log(Object.getPrototypeOf(object1) === a);
