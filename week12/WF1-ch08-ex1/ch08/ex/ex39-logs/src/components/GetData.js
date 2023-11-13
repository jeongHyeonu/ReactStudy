/**
 * ch08/ex/proj/ex08-02-logs
 * ./src/GetData.js
 * 
 * reference coode: ex08-01-1, <Fetch />
 */

import { useState, useEffect } from "react";
let count = 0;

export const Fetch = ({ login }) => {
  console.log('1-1: login:' + login, 'count:', ++count);
  const [data, setData] = useState();
  const url = `https://api.github.com/users/${login}`;
  console.log('1-2: data:', data, 'login:' + login, 'count:' + count);

  useEffect(() => {
    console.log('2-1: data:', data, 'login:' + login, 'count:' + count);
    if (!login) return;

    fetch(url)
    .then(response => response.json())
    .then(setData)
    .catch(console.error);
    
    console.log('2-2: data:', data, 'login:' + login, 'count:' + count);
  }, [login]);

  console.log('3-1: data:', data, 'login:' + login, 'count:' + count);
  if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;

  console.log('4-1: data:', data, 'login:' + login, 'count:' + count);
  return <div>No data</div>;
}
