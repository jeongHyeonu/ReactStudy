/**
 * ch07/ex/ex34-3
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

  // case3: 하나의 useEffect() 의존관계 배열에 추적할 상태를 모두 지정
  useEffect(() => console.log(`typed or phrase changed: "${typed}", "${phrase}"`), [typed, phrase]);

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
