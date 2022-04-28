let name = 'fullName';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get [name]() {                                  
    return `${this.firstName} ${this.lastName}`;    //return the argument value
  }
}

let person = new Person('abi', 'ramya');      //instance of a class
console.log(person.fullName);
