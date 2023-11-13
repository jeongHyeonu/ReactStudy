/**
 * ch08/ex/ex37-2
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-getdata-3.html: XMLHttpRequest() with promise */
/**
 * 실습 37-2: getDataFromUrl() 함수 완성하기
 * 함수가 반환하는 Promise 객체에 대하여,
 * readyState 가 DONE 이고, status가 (200 또는 201)인 경우
 * fulfilled 상태 처리: resolve()
 * 그렇지 않은 경우 에러 처리: reject()
 */
const getDataFromUrl = (method, urls) => new Promise( (resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status === 200 || xhr.status === 201) {
        // code here
      }
      else {
        // code here
      }
    }
  };
  xhr.open(method, urls);
  xhr.send();
});

export const XHRPromise = ({ login }) => {
  const [data, setData] = useState();
  console.log("XHRPromise(): ", ++count);
  
  useEffect(() => {
    if (!login) return;

    getDataFromUrl('GET', `https://api.github.com/users/${login}`)
    .then(setData)
    .catch(console.error);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}