/**
 * ch02/ex07/02-callback.js
 * ref: ch02/05/01/ex-promise-02-callback.js
 */

const fs = require('fs');

console.log(`start`);
// read file: filename1 is './readme1.txt'
fs.readFile('./readme1.txt', (err,data) => {
    if (err) { console.error(err);}
    else {
        console.log('1st reading:', data.toString());
        fs.readFile('./readme2.txt', (err,data) => {
            if (err) { console.error(err);}
            else {
                console.log('2nd reading:', data.toString());
                fs.readFile('./readme3.txt', (err,data) => {
                    if (err) { console.error(err);}
                    else {
                        console.log('3rd reading:', data.toString());
                    }                    
                    console.log(`end`);
                });
            }
        });    
    }
});