//Call by value
"use strict"
var a = 4;
var b;
b = a;
a = 2;
console.log(a);
console.log(b);                  //2 4

//Call by reference
"use strict"
var a = { dns : 'domain name system' };
   var b;
   b = a;
  
    // Mutating the value of a
    a.dns = 'developer';
    console.log(a);
    console.log(b);                         //  {dns: 'developer'}
                                            // {dns: 'developer'}
