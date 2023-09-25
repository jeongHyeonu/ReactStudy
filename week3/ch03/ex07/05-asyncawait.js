/**
 * ch02/ex07/05-asyncawait.js
 * ref: ch02/05/01/ex-promise-05-async-await.js
 */

const fs = require('fs');
const fsPromises = fs.promises;

console.log('start');
(async () => {
    try {
        let data1 = await fsPromises.readFile('readme1.txt');
        console.log('1st : '+data1.toString());
        let data2 = await fsPromises.readFile('readme2.txt');
        console.log('2nd : '+data2.toString());
        let data3 = await fsPromises.readFile('readme3.txt');
        console.log('3rd : '+data3.toString());
    }
    catch (err) {
        console.error();
    }
    finally {
        console.log('end');
    }
})();

// 위의 방식은 비동기를 동기식으로 코드를 짠 것.
// fs.readFileSync() 로 동기식으로 실행 가능