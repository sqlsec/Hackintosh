const update = require('immutability-helper');

const state = {a: 1, b: {c: 2}};
const updated = update(state, {a: {b: {c: {$set: 3}}}});
console.log(JSON.stringify(updated, null, 2));
