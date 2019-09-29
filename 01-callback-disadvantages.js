/**
 * 1. Callback hell - deeply nested code becomes difficult to read (christmas tree)
 * 2. Third-party libraries accepting callback functions can read the callback function code
 */
function sum( x, y, cb ) {
    console.log( cb.toString() );
    setTimeout(
        function() {
            const result = x + y;
            // return result;
            cb( result );
        },
        5000
    );
    return undefined;
}

const result = sum( 10, 20, function( result ) {
    console.log( result );

    sum( result, 30, function( result ) {
        console.log( result );
    });
});

// console.log( sum( 10, 20 ) );