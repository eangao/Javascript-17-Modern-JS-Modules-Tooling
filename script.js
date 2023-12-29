///////////////////////////////////////////////////////
// An Overview of Modern JavaScript Development
///////////////////////////////////////////////////////
//SEE PDF LECTURE AND VIDEO

// Let's start a section with a general overview
// of Modern JavaScript Development.
// So basically of how we write JavaScript today.

// Because when we built applications,
// we don't just write all of our code into one big script
// send that script as it is to the browser,
// and call it a day.
// Now it used to be like this,
// but the way we built JavaScript applications,
// has changed tremendously over the last couple of years.

// So back in the day,
// we used to write all our codes
// into one big script or maybe multiple scripts.
// But today, we divide our projects into multiple modules
// and these modules can share data between them
// and make our code more organized and maintainable.

// Now, one great thing about modules
// is that we can also include 3rd-party modules
// into our own code.
// And there are thousands of open source modules,
// which we also call packages,
// that developers share on the NPM repository.

// And we can then use these packages for free in our own code.
// For example, the popular React framework or jQuery,
// or even the Leaflet library,
// that we used before in our Mapty project.

///////////////////////////////////////////////////////////////
// An Overview of Modules in JavaScript
///////////////////////////////////////////////////////////////
//SEE PDF LECTURE AND VIDEO

// Modules are a super important part
// of software development.
// And so in this lecture,
// we're gonna talk about modules in more depth
// and learn how they work behind the scenes.
// So essentially, a module
// is a reusable piece of code
// that encapsulates implementation details
// of a certain part of our project.
// Now that sounds a bit like a function
// or even a class,
// but the difference is that a module
// is usually a standalone file.
// Now that's not always the case,
// but normally when we think of a module
// we think of a separate file.
// So of course a module always contains some code
// but it can also have imports and exports.

///////////////////////////////////////////////////////////////////
// Exporting and Importing in ES6 Modules
///////////////////////////////////////////////////////////////////

// Importing module

// But again with named imports,
// you have to give them here the same name,
// and you actually have to put them
// inside curly braces like this.
// And so now here we are able to call this function

// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// // console.log(shippingCost);

// Named Imports

// And actually we can take this importing even further,
// because we can also import all the exports
// of a module at the same time.
// So that's import and then everything.
// So that's usually the meaning of the star,
// into an object like this.

// So basically, this year we'll create an object
// containing everything that is exported from the module
// that we will specify here.

// And so basically if we think about this,
// this module here is now basically exporting a public API,
// just like a class.
// So it's as if this object here,
// was an object created from a class,
// which now has these methods,
// and also, for example these properties,
// like shoppingcart.total price.
// Right?,
// So that's the other Named Export from this module.
// Now of course we are not trying
// to replace classes with modules.
// I just wanted to turn your attention to the fact,
// that some things here look pretty similar indeed.
// Right?,
// And actually we can say daddy module exports,
// kind of a public API,
// because everything else of course stays private
// inside of the module.
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// // == Default import,===

// And so then when we import it
// we can basically give it any name that we want.

// However in practice, we usually never mix
// Named and Default Exports in the same module.
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// So the preferred style is actually
// to just use one default expert per module,
// and then import that here like we did.
// And in fact, that's the reason why
// it is easier to import a Default Exports.
// So here we don't even need to use the curly braces,
// and the designers of the specification, did that on purpose.
// So again, to make it easier, to import default exports
// but of course that's not a rigid rule,
// that we always need to follow,
// so, we can do whatever is best for any given situation.

import add, { cart } from './shoppingCart.js'; //combine name and defualts for demo of live connection
add('pizza', 2);
add('bread', 5);
add('apples', 4);

console.log(cart);

// So one more time, repeat it with me,
// imports are not copies of the export.
// They are instead like a live connection,
// and so what that means is that I point to the same place
// in memory,
// because again, otherwise, if it was a copy
// then here, we would not get anything in the array.
// And so keep this in mind,
// when you write your own programs
// because this can of course leads to bugs,
// if you don't know what you're doing,
// and if you don't know that this is how it actually works.
// All right?
// And so with this, we actually finished this video
// which was a pretty important one,
// because this is the foundation
// of how we organize a modern JavaScript code base.
// So make sure to review this lecture thoroughly,
// and I would actually like you to play
// around a little bit on your own,
// with exporting and importing some more values
// like we just did here.
// And after that, I see you then in the next video.
