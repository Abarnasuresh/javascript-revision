const p1 = new Promise((resolve, reject) => {             
    setTimeout(() => {
        console.log('The first promise has resolved');         
        resolve(10);                                      //return after 1 second
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);                                       //return after 2 second
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))                
    .catch(reason => console.log(`Rejected: ${reason}`));           //The first promise has resolved
                                                                    // Resolved: 10
                                                                    //The second promise has resolved
    
