function sum( x, y ) {
    const promise = new Promise(function( resolve, reject ) {
        if( typeof x !== 'number' || typeof y !== 'number' ) {
            reject( new Error( 'both arguments should be numbers' ) );
            return;
        }

        setTimeout(
            function() {
                const result = x + y;
                // return result;
                resolve( result );
            },
            5000
        );
    });

    return promise;
}

sum( 10, 20 )
    .then(function( result ) {
        console.log( result );

        // function( result ) {
        //     console.log( result );
        // }

        // return 'hello'; // this string is passed to next then

        return sum( result, 30 ); // the resolved value of the promise is passed to the next then handler (or rejected value is passed to the catch)
    })
    .then(function( resultAnother ) {
        console.log( resultAnother );
    })
    .catch(function( error ) {
        console.log( error.message );
    });