/**
 * ch08/ex/ex37-1
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
let count = 0;

/* ch08-01-getdata-2.html: XMLHttpRequest() */
export const XHR = ({ login }) => {
  const [data, setData] = useState();
  console.log("XHR(): ", ++count);

  useEffect(() => {
    if (!login) return;

    /**
     * 실습37-1: XMLHttpRequest 객체를 생성하여
     * (1) readystatechange 이벤트 처리를 위한 이벤트 리스너 구현
     *   - readyState가 DONE인 경우,
     *     . status 코드를 확인하여 (200 또는 201)인 경우 response를 상태변수 data에 저장
     *     . status 코드가 위의 case가 아닌 경우에는 responseText를 콘솔에 에러메시지로 출력
     * (2) open() 으로 연결 초기화, GET 메서드 활용
     * (3) send() 로 전송
     */
    const xhr = new XMLHttpRequest();
    // code here
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}