const john = {
    name: 'Jonathan',
    age: 32,
    dob: '12-12-2000'
};

for( prop in john ) {
    console.log( prop );
    console.log( john[prop] );
}