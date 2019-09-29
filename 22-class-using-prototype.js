// class Person {
//     constructor( name, age ) {
//         this.name = name;
//         this.age = age;
//     }

//     celebrateBirthday() {
//         this.age++
//     }
// }

function Person( name, age ) {
    this.name = name;
    this.age = age;

    // return this;
}

// every function has a prototype property
// default prototype property of a function looks like this
// Person.prototype = {
//     constructor: Person
// };

Person.prototype.celebrateBirthday = function() {
    this.age++;
};

const john = new Person( 'John', 32 ); // {}
console.log( john );
console.log( john.__proto__ ); // Person.prototype

john.celebrateBirthday();

console.log( john );