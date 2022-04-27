const p1 = new Promise((resolve, reject) => {                 //create a promise as p1
    setTimeout(() => {
      console.log('The first promise has resolved');
      resolve(10);                                            
    }, 1 * 1000);                                              //return after 1 second
  });
  const p2 = new Promise((resolve, reject) => {               //create a promise as p2
    setTimeout(() => {
      console.log('The second promise has resolved');
      resolve(20);
    }, 2 * 1000);                                             //return after 2 second
  });
  const p3 = new Promise((resolve, reject) => {                 //create a promise as p3
    setTimeout(() => {
      console.log('The third promise has resolved');
      resolve(30);
    }, 3 * 1000);                                            //return after 3 second
  });
  
  Promise.all([p1, p2, p3]).then((results) => {
    const total = results.reduce((p, c) => p + c);           //reduce function will return the array elements
  
    console.log(`Results: ${results}`);
    console.log(`Total: ${total}`);                         //The first promise has resolved
  });                                                       //The Second promise has resolved
                                                            //The third promise has resolved
                                                            //Results:10,20,30
                                                            //Total:60