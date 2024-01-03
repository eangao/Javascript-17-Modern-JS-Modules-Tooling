const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const getLimit = user => spendingLimits?.[user] ?? 0;

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

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
  if (value <= getLimit(user)) {
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
    budget.push({ value: -value, description, user });
  }
};

addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');

// And so, as I said in the beginning,
// what this function here does is to check all of the expenses
// and see if none of them exceeds the spending limit.
const checkExpenses = function () {
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

  for (const entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit';
};

checkExpenses();

const logBigExpenses = function (bigLimit) {
  let output = '';
  // for (const entry of budget) {
  //   // if (entry.value <= -bigLimit) {
  //   //   output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
  //   // }

  //   output +=
  //     entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';
  // }
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);

  for (const entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)} / ` : '';

  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

console.log(budget);
logBigExpenses(500);
