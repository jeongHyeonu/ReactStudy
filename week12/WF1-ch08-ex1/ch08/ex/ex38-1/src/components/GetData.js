/**
 * ch08/ex/ex38-1
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
// code here: axois 패키지 import

let count = 0;

/* ch08-01-getdata-4.html: axios.get() */
export const AxiosGet = ({ login }) => {
  const [data, setData] = useState();
  console.log("AxiosGet(): ", ++count);

  useEffect(() => {
    if (!login) return;

    /**
     * 실습38-1: fetch() 함수 대신 axios 패키지의 get() 메서드 활용
     * 응답으로 받은 response를 json 문자열로 반환한 후
     * 상태변수 data에 assign 함
     * 에러가 발생한 경우 에러 메시지를 콘솔에 출력
     * 단, axois 패키지를 사용하려는 경우 axios를 package.json에 추가하고 소스에 import 해야 함
     */
    axios.get(`https://api.github.com/users/${login}`)
    .then(response => JSON.stringify(response, null, 2))
    .then(setData)
    .catch(console.error);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}