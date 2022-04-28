class Person {                    //base class
    constructor(name) {
        this.name = name;
        console.log(new.target.name);
    }
}
 
class Employee extends Person {       //derived class
    constructor(name, title) {
        super(name);
        this.title = title;
    }
}

let p1= new Person('ramya'); // Person
let p2 = new Employee('abi', 'Programmer'); // Employee


//new.target returns reference of function                      //Person
                                                                //Employee
