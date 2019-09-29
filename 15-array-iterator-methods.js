var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: '620', type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: '450', type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: '430', type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: '910', type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: '430', type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: '610', type: 'new', manufacturer: 'Apple' },
];

// Array iterator methods: forEach(), map(), filter(), find(), some(), every(), reduce()...

// When to use which iterator methods???

// 1. forEach() - to do something on each and every item
phones.forEach(function( phone ) {
    console.log( phone.name );
});

// 2. map() - to get a new array form the existing array
const phoneNames = phones.map(function( phone ) {
    return {
        name: phone.name,
        priceAfterTax: parseInt( phone.price ) * 1.1
    }
});
console.log( phoneNames );

// 3. filter() - get a new array with subset of the array items
const costlyPhones = phones.filter(function( phone ) {
    return phone.price >= 500;
});
console.log( costlyPhones );

// 4. find() - just like filter but returns only the first matched item