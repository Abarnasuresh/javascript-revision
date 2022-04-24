// returns the last index of searchString 

// lastIndexOf(searchString,position)
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const st='the';
console.log(paragraph.lastIndexOf(searchTerm));
// expected output: 52
console.log(paragraph.lastIndexOf(st));
// 48