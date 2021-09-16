const update = require('immutability-helper');

const state1 = ['x'];
const state2 = update(state1, {$push: ['y']})
console.log(JSON.stringify(state2, null, 2));
