const promisify = require('util').promisify ||
(fn => (...args) => new Promise((resolve, reject) => {
  fn(...args, (error, results) => {
    if (error) reject(error);
    else resolve(results);
  })
}));
const fs = require('fs');
const exec = promisify(require('child_process').exec);
const mkdir = promisify(fs.mkdir);
const writeFile = promisify(fs.writeFile);
const assert = require('assert');

const code = `
const update1 = require('immutability-helper');
const update2 = require('immutability-helper').default;

const state1 = ['x'];
const state2 = update1(state1, {$push: ['y']})
const state3 = update2(state1, {$push: ['y']})
console.log(JSON.stringify([state2, state3]));
`

Promise.resolve()
  .then(() => mkdir('test-js-dir'))
  .then(() => process.chdir('test-js-dir'))
  .then(() => exec('npm init -y'))
  .then(() => exec('npm install ../'))
  .then(() => writeFile('foo.js', code))
  .then(() => exec('node foo'))
  .then(result => assert.strictEqual((result.stdout || result).trim(), '["x","y"]'))
  .then(() => process.exit(0))
  .catch(error => {
    console.error('uncaught error', error);
    process.exit(1);
  });
