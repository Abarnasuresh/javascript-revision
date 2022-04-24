//return type is new string 
const str1 = 'Hello';
const str2 = 'World';

console.log("".concat(null));
//null

console.log(str1.concat(' ', str2));
//  "Hello World"

console.log(str2.concat(', ', str1));
// "World, Hello"