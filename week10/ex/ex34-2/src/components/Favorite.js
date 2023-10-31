/**
 * ch07/ex/ex34-2
 * ./src/components/Favorite.js
 */
import React, { useEffect, useState } from 'react';

const Favorite = () => {
  const [typed, setTyped] = useState("");
  const [phrase, setPhrase] = useState("initial-phrase");

  const createPhrase = () => {
    setPhrase(typed);
    setTyped("");
  }

  const onChangeTyped = e => setTyped(e.target.value);

  // case2: useEffect() 마다 의존관계 배열에 각각의 상태를 하나씩만 지정
  useEffect(() => console.log(`typing: ${typed}`), [typed]);
  useEffect(() => console.log(`saved: ${phrase}`), [phrase]);

  return (
    <div>
      <label>Favorite phrase: </label>
      <input
        value={typed}
        placeholder={phrase}
        onChange={onChangeTyped}
      />
      <button onClick={createPhrase}>Save</button>
      <h2>Typed: {typed}</h2>
      <h2>Phrase: {phrase}</h2>
    </div>
  )
};

export default Favorite;
