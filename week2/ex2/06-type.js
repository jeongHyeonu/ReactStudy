/* 06-type.js */



// terminal로 실행했을 때, (node 06-type.js)

// 5
// {}

// 이라는 결과가 나옴.
// ** 웹 브라우저의 script type과 별도로 작동


// 'use strict' 라는 거를 쓰고 하면 ReferenceError: a is not defined
//    at Object.<anonymous> (E:\ReactStudy\ReactStudy\week2\ex2\06-type.js:16:3)

//'use strict'

a = 5;

console.log(a);

console.log(this);
