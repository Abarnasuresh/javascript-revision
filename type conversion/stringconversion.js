//string conversion happens when we need the string form of the value
let value = true;
alert(typeof value); // boolean

value = String(value); // now value is a string "true"
alert(typeof value); // string                                             