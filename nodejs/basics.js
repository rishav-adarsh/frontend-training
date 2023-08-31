const mathObj = require('./math-lib'); // common js module system (CJS)

console.log('app started..');

console.log('logic here', mathObj.add(3, 4));

console.log('app finished!!');

// to run a script : node filename.js

// to debug : node --inspect-brk filename.js
// chrome://inspect

// ASYNC : callback
// 1. Promise : one answer
// 2. Event : multiple answers