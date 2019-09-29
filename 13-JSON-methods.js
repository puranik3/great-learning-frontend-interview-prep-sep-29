const products = `
    [
        { "name": "Soap", "id": 1 },
        { "name": "Biscuits", "id": 2 }
    ]
`;

const productsData = JSON.parse( products );
console.log( productsData );

productsData.push( { name: 'Shampoo', id: 3 } );

console.log( JSON.stringify( productsData ) );