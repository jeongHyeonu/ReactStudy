/**
 * ch08/ex/proj/ex08-03-logs
 * ./src/GetData.js
 * 
 * reference coode: ch08-04-1.html, <GithubUser />
 */

import { useState, useEffect } from "react";
let count = 0; 
let effect = 0;
const url = 'https://api.github.com/users';

export const Fetch = ({ login }) => {
  console.log('1-1: login:' + login, 'count:', ++count, 'effect:', effect);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  console.log('1-2: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', effect);

  useEffect(() => {
    console.log('2-1: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', ++effect);
    if (!login) return;

    setLoading(true);
    console.log('2-2: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', effect);
    fetch(`${url}/${login}`)
    .then(response => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);

    console.log('2-3: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', effect);
  }, [login]);

  console.log('3: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', effect);
  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return <div>No data</div>;

  console.log('4: data:' , data, 'loading:', loading, 'login:' + login, 'count:', count, 'effect:', effect);

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
