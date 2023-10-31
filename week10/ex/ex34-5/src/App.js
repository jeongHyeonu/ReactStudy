/**
 * ch07/ex/ex34-5
 * ./src/App.js
 */
import React, { useState } from 'react';
import StarRating from "./components/StarRating";

const App = () => {
  const [counter, setCounter] = useState(5);

  // 버튼 클릭에 대한 이벤트 처리
  // removeStar(): 상태변수 counter 1 감소
  // addStar(): 상태변수 counter 1 증가
  /* code here */

  return (
    <>
      <div>
        <button onClick={removeStar}>-1</button>
        <button onClick={addStar}>+1</button>
      </div>
      <StarRating totalStars={counter} />
    </>    
  );
}

export default App;