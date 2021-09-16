const promisify = require('util').promisify;
const fs = require('fs');
const exec = promisify(require('child_process').exec);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);

const code = `
const update = require('immutability-helper');

const state1 = ['x'];
const state2 = update(state1, {$push: ['y']})
console.log(JSON.stringify(state2));
`

Promise.resolve()
  .then(() => mkdir('test-js'))
  .then(() => process.chdir('test-js'))
  .then(() => exec('npm init -y'))
  .then(() => writeFile('foo.js', code))
  .then(() => exec('node foo'))

