// module pattern - implementation of private variables for an object
const shoppingCartFactory = function() {
    const items = [];

    return {
        addToCart: function( item ) {
            items.push( item );
        },
        showCart: function() {
            console.log( items );
        }
    };
}

const groceriesCart = shoppingCartFactory();
groceriesCart.addToCart( 'soap' );
groceriesCart.addToCart( 'biscuits' );

const electronicsCart = shoppingCartFactory();
groceriesCart.addToCart( 'mouse' );
groceriesCart.addToCart( 'keyboard' );