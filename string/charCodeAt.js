// Returns UTF-16 code unit value at specified index
//charCodeAt(index)

const str = 'Red Blood Bad Blood ';
const index = 8;   
console.log(str.charCodeAt(index));
// separate value for small letter o/p is:    100


const str1= 'Red Blood Bad Blood ';
const index1 = 10;
console.log(str.charCodeAt(index));
// 10 defines B, so o/p is :     66

//If index is out of range NaN  