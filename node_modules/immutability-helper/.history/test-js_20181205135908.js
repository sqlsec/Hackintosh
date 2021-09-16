const promisify = require('util').promisify;
const fs = require('fs');
const writeFile = promisify(fs.watchFile);
const rimraf = require('rimraf');

rimraf('js-test')
