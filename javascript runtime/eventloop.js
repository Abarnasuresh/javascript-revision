//event loop is the secret behind JavaScript's asynchronous programming.        
//single threaded programming language means that js can do only one thing at a single point in time.

function task(message) {
    // emulate time consuming task
    let n = 10000000000;
    while (n > 0){
        n--;
    }
    console.log(message);
}

console.log('Start script...');
task('Call an API');
console.log('Done!');                              //Start script...
                                                   //Call an API
                                                   //Done!