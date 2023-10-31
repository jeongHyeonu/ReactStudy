/**
 * ch07/ex/ex34-5
 * ./src/components/Star.js
 */

import { useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => {
  
  // useEffect() 훅으로
  // Star가 렌더링 될 때 수행할 동작과
  // Star가 소멸될 때 수행할 동작 (clean-up 함수)을 구현
  /* code here */

  return (
    <FaStar
      color={selected ? "red" : "grey"}
      onClick={onSelect}
    />
  );

}
  
export default Star;