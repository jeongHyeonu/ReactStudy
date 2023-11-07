/**
 * ch07/ex/ex35-2
 * ./src/hooks/hooks.js
 */

import { useState,useReducer, useEffect } from 'react';

export const useCounter = capacity => {
  // 관리할 상태 정보: count
  // 반환할 정보: count, empty, full
  // . count: 현재 탑승자 수
  // . empty: 탑승자가 0인 경우
  // . full: 탑승자가 가득찬 경우
  // 반환할 함수: incCount, decCount
  // . incCount(): 탑승자 1 증가
  // . decCount(): 탑승자 1 감소
  // 반환할 정보와 함수를 array로 반환
  /* code here */
  
  useEffect(()=>{
    setMaxSeat(capacity);
  },[capacity])

  const [maxSeat, setMaxSeat] = useState(capacity);
  const reducer = (state, action) => {
    switch (action.type){
      case 'INC':
        return state >= maxSeat ? state : state + 1;
      case 'DEC':
        return state == 0 ? state : state - 1;
      default:
        return state;
    }
  }
  const [count, dispatch] = useReducer(reducer, 0);
  const incCount = () => dispatch({ type: 'INC' });
  const decCount = () => dispatch({ type: 'DEC' });
  
  const full = count >= maxSeat;
  const empty = count == 0;
  
  return [count, empty,full, incCount, decCount]
};
