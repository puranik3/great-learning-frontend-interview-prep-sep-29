function outer() {
    let x;

    x = 1;

    function inner() {
        console.log( 'x within inner is ', x );
        x++;
    }

    inner();

    // because we are returning an inner function, the outer function variables will NOT be destroyed after the call to outer() function
    return inner;
}

let fn = outer();
fn();
fn();
fn();
fn();
fn();