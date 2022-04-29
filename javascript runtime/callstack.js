//call stack: keep tracking of multiple function calls.
function a1() {
    console.log('Hi by a1!');
    }
    
    function a2() {
    a1();                           //a1() function gets called inside the a2() function. 
    console.log('Hi by a2!');
    }
    
    a2();                          
                                                 //  Hi by a1!
                                                //  Hi by a2!
    