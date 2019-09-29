const john = {
    name: 'John',
    age: 32
};

console.log( john ); // has a prototype

const maria = {
    name: 'Maria',
    age: 28
};

console.log( maria ); // has a prototype

// both prototypes are same
// "objects inherit from objects"
// prototype acts like a "base object"

maria.__proto__ = {
    hasTwoLegs: true
};

console.log( maria.hasTwoLegs ); // displays the inherited property value

maria.hasTwoLegs = 'no she has three'; // properties are always set up as own properties

console.log( maria );

console.log( maria.hasTwoLegs ); // own property value