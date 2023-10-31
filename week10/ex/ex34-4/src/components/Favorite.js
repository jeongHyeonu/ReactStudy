/**
 * ch07/ex/ex34-4
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

  // case4: useEffect() 의존관계 배열에 아무 상태도 지정하지 않음, ch07/02-1과 비교
  useEffect(() => console.log(`only once after init-render`), []);

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
