/**
 * ch02/ex07/03-promise.js
 * ref: ch02/05/01/ex-promise-03-promise.js
 */

const fs = require('fs');

console.log("start");
const promise = new Promise((resolve,reject)=>{
    fs.readFile('./readme1.txt',(err,data1)=>{
        if(!err) resolve(data1);
        else reject(err);
    })
})

promise
.then(data1=>{
    console.log('1st reading:',data1.toString());
    return new Promise((resolve,reject)=>{
        fs.readFile('./readme2.txt',(err,data2)=>{
            if(!err) resolve(data2);
            else reject(err);
        })
    })
})
.then(data2 => {
    console.log('2nd reading:',data2.toString());
    return new Promise((resolve,reject)=>{
        fs.readFile('./readme3.txt',(err,data3)=>{
            if(!err) resolve(data3);
            else reject(err);
        })
    })
})
.then(data3 => console.log('3rd reading:',data3.toString()))
.catch(err=>console.error())
.finally(()=>console.log('end'))
