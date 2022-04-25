const a = {};

Object.defineProperties(a, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {}
});

console.log(a.property1);
