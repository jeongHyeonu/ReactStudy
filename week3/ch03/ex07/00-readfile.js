/**
 * ch02/ex07/00-readfile.js
 */

const fs = require('fs');

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
