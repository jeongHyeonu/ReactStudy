/**
 * ch02/ex07/01-async.js
 * ref: ch02/05/01/ex-promise-01-async.js
 */

const fs = require('fs');

console.log('start');
fs.readFile('./readme1.txt', (err, data) => {
    // error handling code
    if (err) { 
        console.error(err.message);
    }
    // data in console 
    else {
        console.log('1st reading:', data.toString());
    }
});

fs.readFile('./readme2.txt', (err, data) => {
    // error handling code
    if (err) { 
        console.error(err.message);
    }
    // data in console 
    else {
        console.log('2nd reading:', data.toString());
    }
});

fs.readFile('./readme3.txt', (err, data) => {
    // error handling code
    if (err) { 
        console.error(err.message);
    }
    // data in console 
    else {
        console.log('3rd reading:', data.toString());
    }
});

console.log('end');