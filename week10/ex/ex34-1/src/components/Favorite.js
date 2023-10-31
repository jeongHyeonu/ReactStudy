/**
 * ch07/ex/ex34-1
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

  // case1: 의존관계 배열을 지정하지 않은 경우
  useEffect(() => console.log(`typing: ${typed}`));
  useEffect(() => console.log(`saved: ${phrase}`));

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
