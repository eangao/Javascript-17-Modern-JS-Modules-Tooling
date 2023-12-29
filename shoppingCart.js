// Exporting module
console.log('Exporting module');

// Now variables that are declared inside of a module,
// So just like these two ones here,
// are actually sculpt to this module.
// So basically inside a module,
// the module itself is like the top level scope.
// And so by default, this means that all top level variables
// are private inside of this variable.
const shippingCost = 10;
export const cart = [];

// And in ES modules, there are two types of exports,
// Named Exports and Default Exports.
// And named imports is actually the simplest way
// of exporting something from a module,
// because all we have to do is to put export
// in front of anything, that we might want to export.

// Now, just keep in mind
// that exports always need to happen in top level cart,

// Named Exports
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

//  Default Export,

// So usually, we use Default Exports
// when we only want to export one thing per module,
// and so that's the reason why they are called default.
// And so it works like this,
// so pretty similar, but then we have to write default,
// And here you see, that no name is involved at all.
// We are simply exporting this value.
export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
