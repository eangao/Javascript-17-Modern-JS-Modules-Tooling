'use strict';

// However, object dot freeze here
// basically only freezes the first level of the object.
// So it's not a so-called deep freeze
// because we can still change objects inside of the object.
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

// budget[0].value = 10000;// Still works
// budget[9] = 'jonas'// cannot add new object

// And so what we can do is to call the function,
// object dot freeze.
// Then in that function, we pass in the object
// that we want to make immutable basically.
// So by doing this spending limits is now immutable,
// which means that we can no longer put any new properties
// into it.
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

// spendingLimits.jay = 150;
// console.log(spendingLimits);

// const getLimit =  user => spendingLimits?.[user] ?? 0;
const getLimit = (limits, user) => limits?.[user] ?? 0;

// So this state here will be the budget object
// and then here the limits
// is of course going to be the spending limits.

// Now, I said in the last lecture
// or in one of the previous ones
// that we should not pass more than three arguments
// into a function.
// Now, in this case here, we actually have five parameters,
// but well,
// sometimes it's not a big deal to break those rules.
// We could also pass in simply one object
// of options basically, but let's keep it simple here.

//Pure function
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  //   clearly manipulating the user variable.
  // So the user argument in this case.
  // And so as we learned in the last video,
  // we should avoid these data mutations whenever possible.
  //===== user = user.toLowerCase();
  const cleanUser = user.toLowerCase();

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // another way
  //   So let me show you another way of doing the same thing.
  // And I said in the last lecture
  // that we shouldn't write too clever code
  // at least if we then cannot understand it.
  // But the one I'm gonna show you here is actually not too bad.
  // So, what we're gonna do here is to use optional chaining.
  // So optional chaining remember works like this
  // but we can even use it with record notations.
  // So here we can then ask for the user property again.
  // And so, as we learned before,
  // if there is a property with this name,
  // for example jonas here,
  // then all of this here will be that value,
  // but if not, then it will be undefined.
  // And so in that case, we then want to set it to zero.
  // And for that, we can use the knowledge coalescing operator
  // which was introduced in ES2020
  // as the same time as this one here.
  // So S optional chaining.
  // And these are actually huge additions to the language.
  // They're used all the time,
  // and so it's a good idea that you get used
  // to writing code like this.
  // So let's see.
  // And or result should be exactly the same,
  // and indeed it is.
  // So I think that this one year is even better.
  // const limit = spendingLimits?.[user] ?? 0; // DRY
  // const limit = getLimit(user); //DRY

  // if (value <= limit) { //DRY
  // if (value <= getLimit(cleanUser)) { //DRY
  // budget.push({ value: -value, description: description, user: user });
  //     So, in case that the value is indeed below the limit
  // then a new object is created like this,
  // and will then be pushed to this budget array.
  // That makes sense.
  // Now the value here will then be the value but negative.
  // So you see here that all our expenses are negative values
  // and the incomes are positive.
  // And since we're adding an expense
  // it should indeed be negative.
  // Now here we can actually improve our code a little bit
  // because we have description equal description,
  // and user equal user, but that's not necessary.
  // Because with the enhanced object literal syntax
  // we don't need to repeat that.
  // So if the property name is the same as the variable name,
  // we can simply do this,
  // and our result will still be the same.
  //     is that this function right now has a side effect, right?
  // So remember that a side effect basically means
  // that something outside of a function is manipulated
  // or that the function does something other than
  // simply returning a value, right?
  //     And so a function that has, or that produces side effects
  //     // is called an impure function.
  //     because it does attempt to manipulate
  // and to mutate this object that is located outside of it.
  //=======

  //===budget.push({ value: -value, description, user: cleanUser });

  //     So let's just say we want to return then an empty array.
  // And then we use the spread operator
  // to put all the elements of the state in there.
  // And so this effectively creates a copy of this state array.
  // Remember how we did that earlier?
  // And so this is exactly the same technique right here.
  // And now all we need to do
  // is to then add a new element right after this one.
  // And that element is gonna be just object,
  // which looks exactly like what we had before.

  //     So right now, calling the add expense function
  // will actually no longer mutate the budget object, right?
  // return [...state, { value: -value, description, user: cleanUser }];// DRY

  //     So how do we fix that?
  // Well, first of all, we should always pass all the data
  // that the function depends on into the function,
  // so that it doesn't have to reach into the outer scope.
  // So that's a first good practice.
  // And then of course
  // the function should not change any of these values.
  // So in other words, it should not mutate them.
  // And that's the whole reason
  // why we made this object here immutable,
  // just so we can not by accident, mutate this object.
  // Right?
  // So remember that the solution to that is to create a copy
  // and then return that copy of the state.
  // }

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, user: cleanUser }]
    : state;
};

const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');

const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// And so, as I said in the beginning,
// what this function here does is to check all of the expenses
// and see if none of them exceeds the spending limit.
const checkExpenses1 = function (state, limits) {
  // for (const entry of budget) {
  //   // let lim;
  //   // if (spendingLimits[entry.user]) {
  //   //   lim = spendingLimits[entry.user];
  //   // } else {
  //   //   lim = 0;
  //   // }

  //   // const limit = spendingLimits?.[entry.user] ?? 0; // DRY

  //   // if (entry.value < -limit) {// DRY
  //   if (entry.value < -getLimit(entry.user)) {
  //     entry.flag = 'limit';
  //   }
  // }

  // for (const entry of newBudget3)
  //   if (entry.value < -getLimit(limits, entry.user)) entry.flag = 'limit';

  // So basically just like we did here.
  // So the idea is the same.
  // So here we copied the entire array
  // and then added a new object.
  // But here, what we will do is to basically copy
  // the entire entry object
  // and then add the flag property to that.
  // So that sounds a bit complicated,
  // but trust me, it will all make sense.
  // So let's copy this condition here, just like this.
  // And then again, making the code nicely declarative
  // by using the turnery operator.
  // So if this condition is true.
  // So if the value is above the limit
  // then, here we want to return the original object copied.
  // So remember that this creates a copy and add a new property.
  // And so that's flag set to limit.
  // And otherwise what we will want to do is simply return
  // the original entry.
  // And that's actually it.

  return state.map(entry => {
    //     to actually see the return here
    // in the map callback function,
    // but that's just because we have this function block here,
    // right?
    // And so remember that in the map function,
    // whatever is returned from the callback
    // will be the element in the same position of the new array,
    // right?
    // So that's why we need the return here.
    return entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry;
  });
};

// But of course we could also
// completely simplify all of this here
// if we wanted to make it simpler.
// So let's take this and actually transform it
// into an arrow function if you prefer that.
// And this is basically the same function.
const checkExpenses = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);

// const logBigExpenses = function (bigLimit) {
//   //   And here again, we have this for loop
//   // and inside of that loop,
//   // we are actually constantly manipulating
//   // or mutating this output variable here.
//   // And that of course, goes against the spirit of immutability.
//   // Right.
//   // So immutability is of course
//   // not just for objects and arrays.
//   // This also goes for more regular variables.
//   let output = '';
//   // for (const entry of budget) {
//   //   // if (entry.value <= -bigLimit) {
//   //   //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
//   //   // }

//   //   output +=
//   //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
//   // }
//   // output = output.slice(0, -2); // Remove last '/ '
//   // console.log(output);

//   for (const entry of budget)
//     output +=
//       entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

// A better way of doing it
const logBigExpenses = function (state, bigLimit) {
  //   So what we want to do is actually just filter our array
  // for these big expenses.
  // And then basically for each of the results,
  // all we want to do is to create a nice string
  // containing only the emoji.
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  //     So in fact, all console dot logs here,
  // are of course impure because they do something.
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 500);

// And our code looks pretty professional as it is.
// Just keep in mind again, that these are more like guidelines
// and not really hard rules.
// So large applications,
// they are very hard to make 100% functional.
// And that's absolutely okay.
// So actually right in the next project,
// we will already break many of these rules.
// And again, that's okay.
// It's not a big problem.
// As long as we try to still keep some of these principles
// in some of the places we're already making our code
// a lot better and a lot more professional.
