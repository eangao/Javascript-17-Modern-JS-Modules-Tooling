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

// // Importing module

// // But again with named imports,
// // you have to give them here the same name,
// // and you actually have to put them
// // inside curly braces like this.
// // And so now here we are able to call this function

// // import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // addToCart('bread', 5);
// // console.log(price, tq);

// console.log('Importing module');
// // // console.log(shippingCost);

// // Named Imports

// // And actually we can take this importing even further,
// // because we can also import all the exports
// // of a module at the same time.
// // So that's import and then everything.
// // So that's usually the meaning of the star,
// // into an object like this.

// // So basically, this year we'll create an object
// // containing everything that is exported from the module
// // that we will specify here.

// // And so basically if we think about this,
// // this module here is now basically exporting a public API,
// // just like a class.
// // So it's as if this object here,
// // was an object created from a class,
// // which now has these methods,
// // and also, for example these properties,
// // like shoppingcart.total price.
// // Right?,
// // So that's the other Named Export from this module.
// // Now of course we are not trying
// // to replace classes with modules.
// // I just wanted to turn your attention to the fact,
// // that some things here look pretty similar indeed.
// // Right?,
// // And actually we can say daddy module exports,
// // kind of a public API,
// // because everything else of course stays private
// // inside of the module.
// // import * as ShoppingCart from './shoppingCart.js';
// // ShoppingCart.addToCart('bread', 5);
// // console.log(ShoppingCart.totalPrice);

// // // == Default import,===

// // And so then when we import it
// // we can basically give it any name that we want.

// // However in practice, we usually never mix
// // Named and Default Exports in the same module.
// // import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// // console.log(price);

// // So the preferred style is actually
// // to just use one default expert per module,
// // and then import that here like we did.
// // And in fact, that's the reason why
// // it is easier to import a Default Exports.
// // So here we don't even need to use the curly braces,
// // and the designers of the specification, did that on purpose.
// // So again, to make it easier, to import default exports
// // but of course that's not a rigid rule,
// // that we always need to follow,
// // so, we can do whatever is best for any given situation.

// import add, { cart } from './shoppingCart.js'; //combine name and defualts for demo of live connection
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// // So one more time, repeat it with me,
// // imports are not copies of the export.
// // They are instead like a live connection,
// // and so what that means is that I point to the same place
// // in memory,
// // because again, otherwise, if it was a copy
// // then here, we would not get anything in the array.
// // And so keep this in mind,
// // when you write your own programs
// // because this can of course leads to bugs,
// // if you don't know what you're doing,
// // and if you don't know that this is how it actually works.
// // All right?
// // And so with this, we actually finished this video
// // which was a pretty important one,
// // because this is the foundation
// // of how we organize a modern JavaScript code base.
// // So make sure to review this lecture thoroughly,
// // and I would actually like you to play
// // around a little bit on your own,
// // with exporting and importing some more values
// // like we just did here.
// // And after that, I see you then in the next video.

// /////////////////////////////////////////////////////////////////////
// // Top-Level await (ES2022)
// // /////////////////////////////////////////////////////////////////////

// // // Let's now shortly go back
// // // to asynchronous JavaScript,
// // // because there has been an important change in ES2022.
// // // So starting from this new ES2022 version,
// // // we can now use the await keyword
// // // outside of async functions, at least in modules.

// // // So again, as I just said, because this is really important,
// // // we can now basically use the await keyword
// // // outside of an async function,
// // // which we call top-level await.
// // // Just remember that this only works in modules.

// // // But here in our HTML file,
// // // we can still see that we have our type set to module.
// // // So this is what is required
// // // in order to make top-level await actually work.

// // // Free fake API for testing and prototyping.
// // // Powered by JSON Server + LowDB. Tested with XV.
// // // https://jsonplaceholder.typicode.com/

// // console.log('Start Fetching');
// // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

// // const data = await res.json();

// // console.log(data);

// // // All right, so basically, that's how you use top-level await.
// // // And so we see that indeed, the await keyword is
// // // now working outside of an async function.
// // // So before, we would have to write async function something,
// // // and then the function body.
// // // But now, with top-level await in modules,
// // // that is no longer necessary.

// // // Now, what's really, really important to understand here is
// // // that while this is all great and very useful,
// // // // this actually blocks the execution of the entire module now.
// // // And as we learned in the previous section,
// // // that is sometimes not exactly what we want.

// // console.log('something');

// // // And so in fact, this await keyword here,
// // // which is now outside of an async function,
// // // is blocking the entire execution of this module,
// // // // which is something that we had never seen before.
// // // So this really wasn't possible
// // // before we got top-level await in JavaScript.

// // // Now, of course, this can be useful in some situations,
// // // but many times, it can also be harmful,
// // // and especially if it's a really long running task.

// //====
// // All right, now this example here illustrates exactly
// // how top-level await works, but it's a bit too simple.
// // It's not really real world enough.
// // So let's actually get a little bit more real.

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   console.log(data);

//   //   and we're gonna return a new object with the title of data,
//   // which has this entire array here,
//   // and then we want to get the last element.
//   // Now, how can we do that?
//   // Well, let's actually use the new ES2022 at method.
//   // And if this is the first time that you're seeing,
//   // or that you're hearing about the at method,
//   // then check out a new video
//   // that I also added to the array section,
//   // so right at the beginning of that.
//   // But anyway,
//   // we can just use data.at, and then minus one,
//   // which will basically get the very last element of an array,
//   // and then .title.
//   // And then the other one is called the body,
//   // but let's just call it text here.
//   // So text is data at minus one .body.
//   // Give it
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// // Okay, now, if you remember the last section,
// // then you will remember that this is not going to work.
// // So let me show you what lastPost is actually going to be.
// // So you see, it is actually a promise.
// // It is not the object that we were expecting.
// // And the reason for that is that calling an async function,
// // which this function here clearly is,
// // will always return a promise.
// // It will not return the actual data itself,
// // because by the time we are running this line of code here,
// // the data has not yet arrived.
// // So we still have that pending promise.
// // And again, if you don't really remember the specifics here,
// // you can always go back to the last section.
// const lastPost = getLastPost();
// console.log(lastPost);

// // All right, now, the workaround that I showed you before,
// // so to actually get this data here,
// // so this object instead of the promise,
// // was to simply use regular promises.
// // So we can take this promise here
// // that is returned and stored in this variable,
// // and then on that, we can call the then method.
// // Then in the then method,
// // we get access to the resolved value,
// // which we can just call last,
// // and then let's just log it to the console.
// // And of course, it's not called lost, but last.
// // And so after some time, here we get that object,
// // so with the title and the text.
// // However, doing this isn't very clean, not very clean.
// //=====
// // not very clean.
// // lastPost.then(last => console.log(last));

// // And so what we can do now is
// // to use top-level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// // So here is the result of awaiting this promise here now.
// // So the promise returned from this getLastPost function.
// // And it's in situations like this
// // where top-level await actually can get quite useful.

// // Now to finish, I just want to show you
// // one more important implication of using top-level await.
// // And that is the fact that if one module imports
// // a module which has a top-level await,
// // then the importing module will wait
// // for the imported module to finish the blocking code.
// // So that sounds a bit complicated,
// // and it sounds more complicated than it actually is.
// // So let's just demonstrate this with an example.

// // So this top-level await that we have here is
// // in fact blocking the execution, not only in this module,
// // but also in the module that is importing it.
// // So again, it's very important to remember
// // that using top-level await,
// // so await outside of any async function
// // will block the entire module in a way
// // that we really couldn't block code execution before.
// // And so this is not only a really helpful tool,
// // but also one that we need to use with great care.

////////////////////////////////////////////////////////////////////////////
// The Module Pattern
////////////////////////////////////////////////////////////////////////////

// // the main goal of the module pattern
// // is to encapsulate functionality,
// // to have private data, and to expose a public API.
// // And the best way of achieving all that
// // is by simply using a function,
// // because functions give us private data by default
// // and allow us to return values,
// // which can become our public API.

// // And so for that, we wrap it like this and create an IIFE.
// // So it's very important that this function
// // is only created once because the goal of this function
// // is not to reuse code by running it multiple times,
// // the only purpose of this function
// // is to create a new scope and return data just once.
// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} order from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);
// console.log(shoppingCart2.shippingCost); //undefined - its private
// console.log(shoppingCart2.totalPrice);

// // However, right now we are not really storing
// // this returned object here anywhere, right?
// // So if we run this right now,
// // then this object kind of disappears into nothing.
// // However, that's easy to fix
// // because we can simply assign the result
// // of running this IIFE here to a new variable.
// // And so let's call this just like before, the shopping cart,
// // let's say shopping cart two.
// // And so now, just like before,
// // we can now say shopping cart two.add to cart,
// // and here let's say four apples and two pizzas, right?
// // And so it works.
// // And indeed, if we take a look at shopping cart,
// // so shopping cart.
// // Now, of course, now it's not available here
// // because we are still inside of a module,
// // and everything that is in a module
// // is private to that very module.
// // And so therefore we can now not access anything
// // from this module here, here in the console,
// // because this is your basically the global scope,
// // but in the global scope, we are not creating any of this,
// // so not even shopping carts too, right?
// // So again, that's because it is scoped only to this module,
// // but let's still take a look edit here in the console,
// // so of course this we can do.
// // And so here we see that indeed,
// // we only exported these four things.
// // Now, of course our cart now got manipulated,
// // so that one that we defined here in the function, okay?
// // But of course, on the other hand,
// // the properties that we basically wanted to make private,
// // they are not accessible.
// // So we cannot do this, right?
// // So they are undefined.
// // All right, and that's actually it.
// // That's the implementation of the module pattern.
// // Now, do you understand exactly how and why this works?
// // I mean, how do we, for example,
// // have access to the cart variable here
// // and even are able to manipulate it,
// // so we see that it at changed, indeed.
// // So how are we able to do that, even if this IIFE here,
// // so this function has already returned long ago, right?
// // So this function, of course,
// // was only executed once in the beginning,
// // and then all it did was to return this object
// // and assigned it to this variable, right?
// // But then we are able to use all of this
// // and to also manipulate the data
// // that is inside of this function,
// // which is the function that returned this object.
// // And the answer to how all of this works like this

// // is one more time, closures.
// // So closures, remember, allow a function to have access
// // to all the variables that were present
// // at its birthplace, basically.
// // So that was a nice analogy that I used back then
// // when we first talked about closures,
// // and I think it's a very nice way to visualize
// // how it works also in this case.
// // So the add to cart function was created here, right?
// // And so this function here
// // is the birthplace of this function.
// // And so therefore this function never loses connection
// // to its birthplace, which was this function here.
// // And so that birthplace, so to say, is all of this scope,
// // which contains of course the cart.
// // And so therefore the add to cart function out here
// // can still access that cart variable
// // that was in the function, okay?
// // So the reason why this works
// // is not because the cart variable is also in this object,
// // so that's not relevant
// // because here we are not using this.cart, right?
// // We are simply using cart.
// // So here we could also log
// // something that is indeed private to this module.
// // So something that will not be in this exported object.
// // So let's say shipping cost is, and then shipping cost.
// // And so in order to produce this string here,
// // the function will also have to use this variable
// // that was only present at its birthplace,
// // but which no longer does exist besides that.
// // So, indeed that still works,
// // so the function is still able to access
// // that value of 10, okay?
// // And for an even deeper explanation of why this works,
// // you can, of course, always go back and revisit
// // that lecture about closures.
// // Okay, but in essence, again,
// // this is how the module pattern works and it works very well,
// // and it has been working for a long time for developers,
// // so long before ES6 modules even existed in JavaScript.
// // Now, the problem is that if we wanted one module per file,
// // like we have with ES6 modules,
// // then we would have to create different scripts
// // and link all of them in the HTML file.
// // And that then creates a couple of problems,
// // like we have to be careful with the order
// // in which we declare them in HTML,
// // and we would have all of the variables
// // living in the global scope,
// // and finally, we also couldn't bundle them together
// // using a module bundler.
// // And so as you learned at the beginning of this section,
// // using a module bundler is very important
// // in modern JavaScript.
// // So the module pattern that we just learned about
// // does indeed work quite good, but it has some limitations.
// // And so that's exactly the reason
// // why native modules were added to the language in ES6.

////////////////////////////////////////////////////////////////////
// CommonJS Modules
////////////////////////////////////////////////////////////////////

// Besides native ES Modules,
// and the module pattern,
// there are also other module systems,
// that have been used
// by JavaScript in the past.
// But again, they were not native JavaScript.
// so they relied on some external implementations.
// And two examples are:

// AMD Modules,

// and CommonJS modules.

// And in fact, CommonJS modules,
// are worth taking a look at.
// And so let's do that now.
// Now CommonJS modules are important for us,
// because they have been used in Node.js,
// for almost all of its existence.
// So only very recently,
// ES Modules have actually been implemented,
// in Node.js.
// And remember,
// Node.js is a way
// of running JavaScript on a web server,
// outside of a browser.
// Now the big consequence of this,
// is that almost all the modules,
// in the npm repository,
// that we talked about
// in the beginning of this section, remember?
// So all these modules
// that we can use in our own code,
// still use the CommonJS module system.
// And the reason for that,
// is that npm was originally
// only intended for node.
// Which as they said, uses commonJS.
// Only later npm became the standard repository,
// for the whole JavaScript world.
// And so now we are basically stuck,
// with CommonJS.
// And so therefore,
// you will see probably,
// a lot of CommonJS still around.
// And so let's take a quick second
// to see what it looks like.

// And so just like ES6 modules,
// in CommonJS,
// one file, is one module.
// And we export something from a module,
// using export.dot,
// and then the name of the export.
// So let's say,
// export.dot (indistinct),
// and then,
// whatever we want to export there.

// whatever we want to export there.
// Now of course,
// this is not going to work in the browser,
// but it would work in Node.js.

// So this export keyword here,
// is basically an object
// that again, is of course not defined here
// in our code,
// and also not in the browser.
// But in Node.js,
// it is an important object,
// that is used.
// EXPORT
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

// iMPORT
// and import.
// And so this code is not for you to write.
// I just want to show this to you.
// So if we didn't want it to import this,
// would be pretty similar,
// to ES Modules actually,
// but then from here,
// we will call a require function.
// So just like this.
// So again, require
// is of course not defined,
// here in our browser environment,
// but it is defined in Node.js,
// because this is part

// And that's actually all I had to show you,
// even though this is, of course,
// just scratching the surface.
const { addToCart } = require('./shoppingCart.js');

// But all I wanted to do here,
// is to just let you know,
// that there are different module systems,
// and that CommonJS,
// is particularly important,
// in the world of JavaScript.

// Now in the long run,
// ES6 Modules,
// will hopefully,
// and probably,
// replace all of these different module systems.
// But it's still gonna be
// a long way until you're there.
// And so it's good
// that at least you know,
// what is (indistinct),
// when you stumble upon
// the syntax in the future,
// in your work.
