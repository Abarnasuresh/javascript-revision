function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {             //assigning the variable for class
    sayHi()   
    {
        console.log('helo');
    }
});

greeting.sayHi();                         // 'helo'