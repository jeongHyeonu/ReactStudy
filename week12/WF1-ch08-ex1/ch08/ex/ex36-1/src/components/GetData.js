/**
 * ch08/ex/ex36-1
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08/01-getdata-1.html: fetch() */
export const Fetch = ({ login }) => {
  const [data, setData] = useState();
  console.log("Fetch(): ", ++count);

  useEffect(() => {
    if (!login) return;

    /**
     * 실습 36-1: URL로부터 받은 response를 
     * json으로 변환하고,
     * 문자열로 변환하여,
     * 상태변수 data에 assign 함
     * 오류가 발생한 경우, 콘솔에 에러 메시지 출력
     */ 
    // code here
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}
