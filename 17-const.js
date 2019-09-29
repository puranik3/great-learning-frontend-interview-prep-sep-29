const john = {
    name: 'John',
    age: 32
};

john.age++;

console.log( john );

const days = [ 'Monday', 'Tuesday' ];
days.push( 'Wednesday' );

console.log( days );

john = { // error - reassignment not allowed
    name: 'John',
    age: 34
};