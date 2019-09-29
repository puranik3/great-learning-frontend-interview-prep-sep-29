// JS is single-threaded language - it can execute only one piece of code at a time
// if some piece of code is currently executing it MUST run to completion before any other piece of code can be picked up
setTimeout(function() { // setTimeout set up an alarm. When the alarm rings, the browser will add the function to an "event queue"
    console.log( 1 );

    setTimeout(function() {
        console.log( 5 );
    }, 0 );
}, 0);

console.log( 2 );

setTimeout(function() {
    console.log( 3 );

    setTimeout(function() {
        console.log( 6 );
    }, 0 );
}, 0);

console.log( 4 );