## Arrays:
Storeing the multiple values with one data type. it is a special type of object(collection of similar data elements)
* typeof array is an object
        isArray()--->True--->Array
### Declaration:
```js
let arr = new Array();
let arr=[];
```
### Array constructor:
It is used to create array of objects

### Array at:
array at returns the item at the index 
index->element return 

### Array concat():
Concat is used to merge two or more arrays. and returns the new array 
* syntax:
concat()
concat(value0)
concat(value.......)

### Array copyWithin():
copyWithin method shallows copies an part of an array to the another location in the same array and returns it without modifying the length.
* syntax:
copyWithin(target)
copyWithin(target, start)
copyWithin(target, start, end)
### Array entries:
* The entries() method returns a new Array Iterator object 
* contains the key/value pairs for each index in the array.
### Array every:
* every() method tests the elements function. 
* It returns a Boolean value.

### Array fill:
* fill() method change the element in array to static value
from a start index default 0
### Array filter:
filter method creates a new array with all elements
### Array find:
find() method returns the first element in the given array 
### Array findindex:
findIndex() method returns the index of the first element in the array
### Array flat:
flat() method creates a new array with all sub-array elements 
* syntax
flat()
flat(depth)