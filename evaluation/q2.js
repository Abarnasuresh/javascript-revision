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









// * Write the function with name as digital root and pass the parameter
// * Convert the number to string and split the number 
// * Iterate over the digits and sum the each individual numbers
// * Check the length of sum number
// * If length is greater than one ,split those numbers and sum those numbers.
// * print the result