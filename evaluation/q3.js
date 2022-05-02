function number(arr, n){
  
    var res = {};
    var sol = []
    
    for (var i = 0; i < arr.length; i++) {
      if (res[arr[i]] >= n) {
        continue;
      } else if (res[arr[i]] === undefined) {
        res[arr[i]] = 1
      } else {
        res[arr[i]]++
      }
       sol.push(arr[i])
      }
    
      return sol;
    } 
    number([1,1,2,1,2,3,4,2],2);                            //Output: [1, 1, 2, 2, 3, 4]




//* Write the function with name as number and pass arr,n as arguments.
//* Pass the empty array and object for storing result 
//* Iterate over the array elements and check number of occurance of numbers
//* Delete the number which is more than count of depth and print the final result