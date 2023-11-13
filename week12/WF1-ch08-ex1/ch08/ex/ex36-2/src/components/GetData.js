/**
 * ch08/ex/ex36-2
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-getdata-6.html: fetch() with async/await */
export const FetchAsync = ({ login }) => {
  const [data, setData] = useState();
  console.log("FetchAsync(): ", ++count);

  const fetchData = async id => {
    const url = `https://api.github.com/users/${id}`;
    if (!id) return;
    
    /**
     * 실습36-2: async-await 로 fetch()를 호출하는 try-catch 구문 완성하기
     * fetch() 결과를 받아와서 response에 넣고
     * JSON 문자열로 반환한 후
     * 상태변수 data에 assign 함
     * 오류가 발생한 경우, catch 구문으로 받아서 에러 메시지를 콘솔에 출력
     */
    try {
      // code here
    }
    catch (err) {
      // code here
    }
  };

  useEffect(() => {
    fetchData(login);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}