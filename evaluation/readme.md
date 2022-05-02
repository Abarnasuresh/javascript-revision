1.Your task is to split the chocolate bar of given dimension n x m into small squares.
Each square is of size 1x1 and unbreakable.
Implement a function that will return the minimum number of breaks needed.
For example, if you are given a chocolate bar of size 2 x 1 you can split it into single squares in
just one break, but for size 3 x 1 you must do two breaks.
If the input data is invalid you should return 0 (as in no breaks are needed if we do not have any
chocolate to split). Input will always be a non-negative integer.
* Write the function with name as breakChocolate and pass the parameter as n,m.

## Algorithm:
* Check whether the given number is greater than zero for both n and m.
* Return n-1+m-1 ,if number is valid 
* Otherwise return zero if number is invalid 
* call the function and print th result 

### Program:
```js
function breakChocalate(n,m){
    if(n>0 && m>0){
        return n-1+m-1;                  
    }
    else{
        return 0;
    }
}           
console.log(breakChocalate(3,4));         //Output:5                    
```

2.A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits
of n. If that value has more than one digit, continue reducing in this way until a single-digit number
is produced. This is only applicable to natural numbers.

### Algorithm:
* Write the function with name as digital root and pass the parameter
* Convert the number to string and split the number 
* Iterate over the digits and sum the each individual numbers
* Check the length of sum number
* If length is greater than one ,split those numbers and sum those numbers.
* print the result

### Program:
```js
function digital_root(n) {
    var digits = n.toString().split("").map(Number);
    var sum = 0;
    for (var i = 0; i < digits.length; i++) {            //iterate over the digits
      sum += digits[i]; 
                                                         //sum = sum + digits[i]
    }
    var sumString = sum.toString();
    if (sumString.length > 1) {
      var sumDigits = sumString.split("").map(Number);
      var firstSumDigit = sumDigits.slice(0);            //taking first digit
      var lastSumDigit = sumDigits.slice(-1);           //taking last digit 
      return firstSumDigit[0] + lastSumDigit[0]; 
    } else {
        return sum;
    }
  }
  digital_root(345);                                      //function call 
                                                         // Output: 3
```