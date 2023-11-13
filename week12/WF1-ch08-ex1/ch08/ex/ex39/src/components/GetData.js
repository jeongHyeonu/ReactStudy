/**
 * ch08/ex/proj/ex08-02
 * ./src/GetData.js
 * 
 * reference coode: ex08-01-1, <Fetch />
 */

import { useState, useEffect } from "react";
let count = 0;

export const Fetch = ({ login }) => {
  console.log('Fetch(): ', ++count);
  const [data, setData] = useState();
  const url = `https://api.github.com/users/${login}`;
  
  useEffect(() => {
    if (!login) return;

    fetch(url)
    .then(response => response.json())
    .then(fetched => JSON.stringify(fetched, null, 2))
    .then(setData)
    .catch(console.error);
  }, [login]);

  if (data) return <pre>{data}</pre>;

  return <div>No data</div>;
}
