/**
 * ch08/ex/proj/ex08-03
 * ./src/GetData.js
 * 
 * reference coode: ch08-04-1.html, <GithubUser />
 */

import { useState, useEffect } from "react";
let count = 0;
const url = 'https://api.github.com/users';

export const Fetch = ({ login }) => {
  console.log('Fetch(): ', ++count);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (!login) return;

    setLoading(true);
    fetch(`${url}/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, [login]);

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <div>No data</div>;

  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width:200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
    </div>
  );
}
