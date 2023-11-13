/**
 * ch08/ex/ex38-2
 * ./src/GetData.js
 */

import { useState, useEffect } from "react";
// code here: axois 패키지 import

let count = 0;

/* ch08-01-getdata-5.html: axios.get() with async/await */
export const AxiosGetAsync = ({ login }) => {
  const [data, setData] = useState();
  console.log("AxiosGetAsync(): ", ++count);

  /**
   * 실습38-2: 실습38-1 문제의 코드에서 비동기 함수의 순차적인 처리를 위해 async-await 구문을 활용
   * 단, axois 패키지를 사용하려는 경우 axios를 package.json에 추가하고 소스에 import 해야 함
   */
  // code here: fetchData()

  useEffect(() => {
    if (!login) return;

    fetchData(login);
  }, [login]);

  if (data) return <pre>{data}</pre>;
  return <div>No data</div>;
}