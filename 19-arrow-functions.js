function outer() {
    console.log( 'outer this = ', this );

    const foo1 = function() {
        console.log( 'foo1 this = ', this );
    };

    foo1();

    const foo2 = () => {
        console.log( 'foo2 this = ', this );
    };

    foo2();
}

outer(); // window is printed 3 times
outer.call( "hello" ); // "hello" (outer), window (foo1), "hello" (foo2)