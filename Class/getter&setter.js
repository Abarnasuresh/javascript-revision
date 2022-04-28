class Person {
    constructor(name) {
        this.setName(name);
    }
    getName() {                                        //return the argument value
        return this.name;               
    }
    setName(newName) {                                 //set the argument value
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this.name = newName;
    }
}
 
let person = new Person('abarna');
console.log(person);                                           // abarna

person.setName('abi');
console.log(person.getName());                                 // abi 